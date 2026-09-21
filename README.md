# ReplayEveryMemory Studio

A three-page Astro website: Home, Media, and About Us. Built with the owner's official artwork, EuroStyle font family, approved game credits, Instagram, and contact email.

## Preview and build

- `npm install`
- `ASTRO_TELEMETRY_DISABLED=1 npm run dev`
- `ASTRO_TELEMETRY_DISABLED=1 npm run check`
- `ASTRO_TELEMETRY_DISABLED=1 npm run build`

The static website is generated in `dist/`. The current local preview uses port 4321.

## Updating the website

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for adding artwork, videos, and social links.

- `src/data/media.ts`: media collection, including future video entries.
- `src/data/studio-team.json`: the owner-approved four-member website roster: James, Emily, Matilda, and Ramona. This is the roster authority going forward.
- `src/config/site.ts`: Instagram, public email, and deployment origin.
- `src/data/asset-provenance.json`: owner-supplied source paths.
- `PRODUCT.md`: current product truth and scope.
- `DESIGN.md`: current visual system.

The older `Replay_Every_Memory_Website_Build_Handoff_v1.0` folder is historical reference. The September 21 brief, current product file, and approved game-credit data supersede its roster, roles, type choices, contact information, and route list. It is not shipped to visitors.

## Deployment

Set `siteUrl` in `src/config/site.ts` to the final HTTPS origin and rebuild to enable indexing and canonical metadata. Deploy only the generated `dist/` folder to a static host that resolves extensionless page links (or serves the generated directory indexes). No analytics, remote forms, cookies, or external font requests are included.

## Artwork handling

Original artwork is stored in `src/assets/`. `StudioImage` generates compressed display previews, and the production build excludes original artwork files. The public gallery offers in-page viewing only. See CONTENT_GUIDE.md for the limits of browser-based copying deterrents. Deploy only `dist/`, replacing the previous output rather than retaining old asset files.
