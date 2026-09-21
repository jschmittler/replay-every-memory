# Updating ReplayEveryMemory Studio

## Add artwork

The gallery includes five supplied development boards: story, character design, environments, props and items, and story beats. Captions explain each board's purpose and visual direction. Keep standalone studio branding out of the gallery; it belongs in the site's brand placements. Earlier branding embedded in a development board remains part of the original artwork.

1. Put the original PNG in `src/assets/` (or make a subfolder there). The logical `/assets/` path in the collection is resolved by `StudioImage`; it is not a public file URL.
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

Only place a web-ready viewing copy of a video and its poster in `public/assets/`; retain source footage outside the published site. Anything delivered to a visitor’s browser remains retrievable. Add an entry such as this, replacing the example paths with the files you supplied:

```ts
{
  id: 'first-gameplay',
  title: 'A first look at Trash Dash',
  category: 'Videos',
  type: 'video',
  src: '/assets/first-gameplay.mp4',
  poster: '/assets/first-gameplay-poster.jpg',
  captions: '/assets/first-gameplay.en.vtt',
  alt: 'A first look at Trash Dash gameplay.',
  description: 'A short description of the footage.',
  width: 1920,
  height: 1080,
}
```

Add WebVTT captions when the video contains speech or meaningful sound. The native player includes playback, volume, full-screen, and caption controls. Videos never autoplay. Until you add one, the Videos filter shows an honest “Still in the making” message.

## Update the studio team

The approved roster is in `src/data/studio-team.json`. Roles, biographies, and ordering on About Us come from this file. Original portraits live in `src/assets/team/` and are rendered as web previews. Update from approved game credits only; do not restore the historical website roster or old role descriptions. The four family portraits on Home use the first four members in game-credit order.

## Update contact or publish changes

Instagram and email are configured in `src/config/site.ts`. The public email is `trashdash@replayeverymemory.com`.

Rebuild the website after changing content. The media page is managed through these local files; this version does not include a browser-based upload dashboard or hosted content service. No example media above is included in the live collection.

## Viewing-only artwork policy

The build converts original PNG artwork to compressed WebP previews capped at 1440 pixels wide. The build hook excludes byte-identical source artwork from the published output and fails if a page directly references a source file. Original SVG and unused font files are not shipped. Deploy only `dist/`; never publish the project directory or expose the development server.

The site omits downloads, blocks image dragging and image context menus, and requests video controls without a download button where supported. Text selection, keyboard navigation, and browser zoom remain available. These are convenience deterrents, not access control: public previews, videos, and the two fonts needed to render the site can still be retrieved, and screenshots cannot be blocked. Never place a confidential asset on a public page.

## Homepage character animation

`src/assets/animation/trashy-idle.webm` is the owner-supplied web-ready loop, used only in the Home hero. `TrashyArt.astro` starts it silently when visible and motion is allowed, pauses it offscreen or when the page is hidden, and provides a Pause/Play control. Reduced-motion preferences, unsupported playback, unavailable transparency, and loading errors keep the approved still image visible. The source is assigned only when animation is allowed and the character is in view. The video remains subject to the same public-preview copying limitations as any displayed media.
