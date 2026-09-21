import { createHash } from 'node:crypto';
import { readdir, readFile, unlink } from 'node:fs/promises';
import { extname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg']);
async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory()
    ? filesIn(resolve(directory, entry.name)) : resolve(directory, entry.name)))).flat();
}
const digest = bytes => createHash('sha256').update(bytes).digest('hex');

// Astro also emits imported source images. Keep only display renditions in dist.
// Fail rather than silently break a page if a source file is directly referenced.
export async function excludeArtworkMasters(outputUrl) {
  const output = fileURLToPath(outputUrl);
  const sourceFiles = (await filesIn(fileURLToPath(new URL('../src/assets/', import.meta.url))))
    .filter(file => imageExtensions.has(extname(file).toLowerCase()));
  const masterHashes = new Set(await Promise.all(sourceFiles.map(async file => digest(await readFile(file)))));
  const published = await filesIn(output);
  const references = await Promise.all(published.filter(file => /\.(html|css|js|json|xml|webmanifest)$/.test(file)).map(file => readFile(file, 'utf8')));
  let removed = 0;
  for (const file of published.filter(file => imageExtensions.has(extname(file).toLowerCase()))) {
    if (!masterHashes.has(digest(await readFile(file)))) continue;
    const url = '/' + relative(output, file).split(sep).join('/');
    if (references.some(text => text.includes(url))) throw new Error(`Original artwork is referenced by the website: ${url}. Use StudioImage instead.`);
    await unlink(file);
    removed++;
  }
  console.info(`Artwork publishing: excluded ${removed} source files; display previews retained.`);
}
