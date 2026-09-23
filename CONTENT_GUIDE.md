# Updating ReplayEveryMemory Studio

## Add artwork

The gallery includes five supplied development boards: story, character design, environments, props and items, and story beats. Captions explain each board's purpose and visual direction. Keep standalone studio branding out of the gallery; it belongs in the site's brand placements. Earlier branding embedded in a development board remains part of the original artwork.

1. Put the original PNG or JPEG in `src/assets/` (or make a subfolder there). The logical `/assets/` path in the collection is resolved by `StudioImage`; it is not a public file URL.
2. Open `src/data/media.ts` and add an entry to the `media` list:

```ts
{
  id: 'forest-artwork',
  title: 'A walk through the forest',
  category: 'Artwork',
  type: 'image',
  src: '/assets/forest-artwork.png',
  alt: 'Describe the actual artwork for someone who cannot see it.',
  description: 'A short caption for this piece.',
  width: 1600,
  height: 900,
}
```

Use the image's actual width and height. Optional `presentation: 'dark'` gives light-colored artwork a navy backdrop; `presentation: 'board'` contains a complete development sheet without cropping it. Keep locked logos and approved character art unchanged. The gallery filters and counts update automatically. Visitors can enlarge a web preview within the page. Do not add download controls or links to original files.

## Add a video

Place only a web-ready viewing copy of the video in `src/assets/media/` and import it with `?url` in `src/data/media.ts`. Keep source footage outside the site. Put a web-ready poster in `public/_astro/media/`, which the Hostinger root router serves. Anything delivered to a visitor’s browser remains retrievable. Add an entry such as this, replacing the example paths with the files you supplied:

```ts
import firstGameplayVideo from '../assets/media/first-gameplay.mp4?url';

{
  id: 'first-gameplay',
  title: 'A first look at Trash Dash',
  category: 'Videos',
  type: 'video',
  src: firstGameplayVideo,
  poster: '/_astro/media/first-gameplay-poster.jpg',
  alt: 'A first look at Trash Dash gameplay.',
  description: 'A short description of the footage.',
  width: 1920,
  height: 1080,
}
```

Add WebVTT captions when the video contains speech or meaningful sound; place the caption file in `public/_astro/media/` and add its URL to the entry. The native player includes playback, volume, full-screen, and caption controls. Videos never autoplay.

## Update the studio team

The approved roster is in `src/data/studio-team.json`. Roles, biographies, and ordering on About Us come from this file. Original portraits live in `src/assets/team/` and are rendered as web previews. The owner has limited the website roster to James, Emily, Matilda, and Ramona. Preserve their approved roles, biographies, and existing order; do not restore fictional studio personas from the game credits. The same four family members appear on Home and About Us.

## Update contact or publish changes

Instagram and email are configured in `src/config/site.ts`. The public email is `trashdash@replayeverymemory.com`.

Rebuild the website after changing content. The media page is managed through these local files; this version does not include a browser-based upload dashboard or hosted content service. The example media above is illustrative and is not included in the collection.

## Viewing-only artwork policy

The build converts original PNG and JPEG artwork to compressed WebP previews capped at 1440 pixels wide. The build hook excludes byte-identical source artwork from the published output and fails if a page directly references a source file. Original SVG and unused font files are not shipped. Deploy only `dist/`; never publish the project directory or expose the development server.

The site omits downloads, blocks image dragging and image context menus, and requests video controls without a download button where supported. Text selection, keyboard navigation, and browser zoom remain available. These are convenience deterrents, not access control: public previews, videos, and the two fonts needed to render the site can still be retrieved, and screenshots cannot be blocked. Never place a confidential asset on a public page.

## Homepage character animation

`src/assets/animation/trashy-idle.webm` is the owner-supplied web-ready loop, used only in the Home hero. `TrashyArt.astro` starts it silently when visible and motion is allowed, pauses it offscreen or when the page is hidden, and provides a Pause/Play control. Reduced-motion preferences, unsupported playback, unavailable transparency, and loading errors keep the approved still image visible. The source is assigned only when animation is allowed and the character is in view. The video remains subject to the same public-preview copying limitations as any displayed media.


## Studio-first architecture

- Home introduces the studio, features its current game, and tells the DIY studio story. Keep individual profiles on About Us.
- The hero’s primary action is `Meet the team` → `/about#team`. General game-introduction links always go to `/games`.
- `src/data/games.ts` owns shared project identity, status, release note, platform copy, and supporting destinations. `src/pages/games.astro` currently gives the first game a full introduction.
- Characters and Media retain their public URLs so bookmarks work. Their game subnavigation makes their relationship to Trash Dash clear.
- When a second game is ready, add its record and create individual game pages (for example `/games/trash-dash`), then change Games to a collection of substantial project introductions. Preserve `/games#trash-dash` and existing supporting routes or add redirects. Adding a data record alone does not automatically publish a project page.
- The homepage story can later feature a real anecdote or creative-process image. See `ASSET_WISHLIST.md`; no empty news feed is needed.
- Official studio marks, approved portraits, and character artwork remain intact. New woodland images are sourced from Trash Dash and listed in `src/data/asset-provenance.json`.
- `src/styles/studio.css` layers the studio-first visual system over shared base, gallery, and character styles. `ForestScene.astro` provides the layered artwork and pointer motion; `TrashyArt.astro` retains video fallback and pause behavior.
