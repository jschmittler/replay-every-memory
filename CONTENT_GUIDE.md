# Updating ReplayEveryMemory Studio

## Add artwork

The gallery includes five supplied development boards: story, character design, environments, props and items, and story beats. Captions explain each board's purpose and visual direction. Keep standalone studio branding out of the gallery; it belongs in the site's brand placements. Earlier branding embedded in a development board remains part of the original artwork.

1. Put the image in `public/assets/` (or make a subfolder there).
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

Use the image's actual width and height. Optional `presentation: 'dark'` gives light-colored artwork a navy backdrop; `presentation: 'board'` contains a complete development sheet without cropping it. Keep locked logos and approved character art unchanged. The gallery filters and counts update automatically. Images can be viewed at full size or downloaded.

## Add a video

Place the finished video and its poster image in `public/assets/`. Add an entry such as this, replacing the example paths with the files you supplied:

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

The approved roster is in `src/data/studio-team.json`. Roles, biographies, and ordering on About Us come from this file. Portraits live in `public/assets/team/`. Update from approved game credits only; do not restore the historical website roster or old role descriptions. The four family portraits on Home use the first four members in game-credit order.

## Update contact or publish changes

Instagram and email are configured in `src/config/site.ts`. The public email is `trashdash@replayeverymemory.com`.

Rebuild the website after changing content. The media page is managed through these local files; this version does not include a browser-based upload dashboard or hosted content service. No example media above is included in the live collection.
