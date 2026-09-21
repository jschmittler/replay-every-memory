# Home animation verification — 2026-09-21

The owner-supplied WebM is VP9 with an alpha track, 1112 × 834, 24 fps, 4.041 seconds, 764,490 bytes. It is the approved web-ready viewing copy; no direct file or download link is offered.

Browser verification confirmed transparent playback against the gold hero, pause/resume (mouse and keyboard), automatic offscreen pause, and resumed playback on returning. Final phone capture at 390px showed the whole character, accessible pause control, and no horizontal overflow. Desktop and the user's viewport were also visually inspected.

The actual controller was exercised in an isolated lifecycle harness: reduced motion avoids loading the source, changing the preference switches between the loop and still, manual pause is respected, hidden-page playback stops, and unsupported codecs or opaque decoded frames retain the still. These fallback paths were simulated; no claim of testing every browser is made.

Astro check passed with no diagnostics. The final production build passed, included the WebM display file, and continued excluding all 20 original image files.
