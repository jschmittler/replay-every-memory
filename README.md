# ReplayEveryMemory Studio

A studio-first Astro website: Home, Games, and About Us, with Characters and Media supporting Trash Dash under Games. Built with official artwork, EuroStyle lettering, approved family profiles, and original environment art from the Trash Dash project.

## Preview and build

- `npm install`
- `ASTRO_TELEMETRY_DISABLED=1 npm run dev`
- `ASTRO_TELEMETRY_DISABLED=1 npm run check`
- `ASTRO_TELEMETRY_DISABLED=1 npm run build`

The static website is generated in `dist/`. Astro defaults to port 4321 and selects the next available port if it is occupied.

## Updating the website

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for adding artwork, videos, and social links.

- `src/data/games.ts`: shared project identity, status, release note, platform copy, and supporting links.
- `src/data/media.ts`: Trash Dash media collection, including future video entries.
- `src/data/studio-team.json`: the owner-approved four-member website roster: James, Emily, Matilda, and Ramona. This is the roster authority going forward.
- `src/config/site.ts`: Instagram, public email, and deployment origin.
- `src/data/asset-provenance.json`: owner-supplied source paths.
- `PRODUCT.md`: current product truth and scope.
- `DESIGN.md`: current visual system.
- `ASSET_WISHLIST.md`: optional authentic studio material for a future pass.

The older `Replay_Every_Memory_Website_Build_Handoff_v1.0` folder is historical reference. The September 21 brief, current product file, and approved game-credit data supersede its roster, roles, type choices, contact information, and route list. It is not shipped to visitors.

## Deployment

The live origin is `https://replayeverymemory.com`. Hostinger clones `main` into `public_html/dist`, so the generated website lives at `public_html/dist/dist`. Install `deployment/hostinger-root.htaccess` as `public_html/.htaccess` through Hostinger's file manager. This file sits outside the Git checkout and routes the public domain to the generated pages and display assets; source files, Git metadata, and old uploads are blocked. Generated page routes are discovered automatically.

Follow the testing and approval gate in `AGENTS.md` before pushing. After deployment completes, clear Hostinger's cache if needed and verify the live page content. No analytics, remote forms, cookies, or external font requests are included.

## Artwork handling

Original artwork is stored in `src/assets/`. `StudioImage` generates compressed display previews, and the production build excludes original artwork files. The public gallery offers in-page viewing only. See CONTENT_GUIDE.md for the limits of browser-based copying deterrents. Deploy only `dist/`, replacing the previous output rather than retaining old asset files.

`deployment/hostinger-root.htaccess` is the one-time Hostinger root router. It maps requests to the generated `dist/dist/` output and discovers new Astro pages and display assets automatically, so future route additions do not require another allowlist edit. Because Hostinger keeps `public_html/.htaccess` outside the Git checkout, install the current file there once; subsequent Git pushes update the generated site without changing this router.
