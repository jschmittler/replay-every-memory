# Viewing-only artwork verification — 2026-09-21

- Astro check passed with no errors, warnings, or hints; production build passed.
- The production hook excluded 20 byte-identical original artwork files. A byte-hash audit found no source PNG/SVG files remaining in dist.
- All 41 image, font, stylesheet, and icon references examined in generated HTML resolved. No direct image links or download attributes were present.
- Safeguard tested with temporary fixtures: an HTML reference to an original fails the build; an unreferenced original is removed; a different display rendition is retained.
- Production browser checks: artwork opens in-page, Escape and Close dismiss it, focus returns to the opener, image right-click opens no save menu, and images are not draggable.
- The viewer fits the actual user viewport, 390px phone width, and 1440px desktop width. Desktop Home artwork remained intact with no visible broken images.
- All seven gallery entries remain viewable. Source artwork provenance scan passed for all 20 source rasters.

Limits: browser deterrents do not prevent extraction or screenshots. Display renditions, videos, and required web fonts must be delivered to browsers and remain retrievable. Only deploy dist, replacing old published assets; the development server is for local use.
