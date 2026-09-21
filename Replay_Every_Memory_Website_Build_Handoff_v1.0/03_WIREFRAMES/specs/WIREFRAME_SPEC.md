# Gate 2 responsive wireframe specification

Status: approved structural source of truth, reconstructed for this handoff from the approved Gate 2 decisions.

## Direction

**The Playable Memory** — the website should feel like a playable expression of Replay Every Memory without becoming a novelty game interface. The game and its evidence lead. Clarity, speed, accessibility, and usefulness outrank cinematic presentation.

The wireframes lock information architecture, page responsibility, narrative sequence, desktop/mobile composition, and component priorities. They do not lock final typography, decorative styling, motion, media crops, CMS, hosting, or framework.

## Global structure

Primary navigation:

1. Trash Dash
2. Journal
3. Studio
4. Press
5. Follow Development

Utility destinations:

- Contact
- Accessibility
- Privacy
- @replayeverymemory

At 63rem and below, collapse the primary navigation into a full-screen or near-full-screen menu with large direct links. Preserve the current page state, a close control, utility links, and the primary action. Lock background scrolling while open. Return focus to the menu trigger on close.

## Page inventory

| Route | Responsibility | Desktop reference | Mobile reference |
|---|---|---:|---:|
| `/` | Game-first studio homepage | 1440 px | 390 px |
| `/trash-dash` | Complete public game overview | 1440 px | 390 px |
| `/journal` | Development Journal index | 1440 px | 390 px |
| `/journal/[slug]` | Repeatable evidence-led article | 1440 px | 390 px |
| `/studio` | Studio purpose, name, team, timeline | 1440 px | 390 px |
| `/press` | Facts and labeled asset downloads | 1440 px | 390 px |
| `/contact` | Purpose-led contact route | 1440 px | 390 px |
| `/accessibility` | Accessibility approach and feedback route | 1440 px | 390 px |
| `/privacy` | Provider-aware privacy information | 1440 px | 390 px |
| `404` | Recovery | 1440 px | 390 px |

## Homepage first viewport acceptance

Within the first viewport, a first-time visitor must understand:

- Replay Every Memory made this.
- *Trash Dash* is the current game.
- It is a colorful, character-driven platforming adventure.
- It is in development for 2026.
- The useful current action is Follow Development.

Do not require autoplay video, sound, hover, scrolling, or a loading animation to answer these questions.

## Homepage module sequence

1. Header
2. Game-first *Trash Dash* hero
3. Current status and platform facts
4. Game promise
5. Trailer/gameplay proof with honest unavailable state
6. Trashy spotlight
7. Gunk/world stakes
8. Development proof and Journal article treatments
9. Studio introduction and purpose
10. Studio principles
11. Latest Journal
12. Closing action
13. Footer

## Trash Dash module sequence

1. Game hero and release state
2. Spoiler-safe overview
3. Core experience
4. Trashy
5. Jimothy
6. The Gunk
7. Public world progression
8. Approved high-level gameplay list
9. Gallery with fallback
10. Development status
11. Credits
12. Closing action

## Journal behavior

The Journal is a primary product surface, not a news archive. Cards lead with the problem or decision. Article pages use:

> Problem → Observation → Attempts → Change → Improvement → Remaining work → Next decision

Filters must be real controls with a useful empty state. If there are no approved posts, use the copy-defined candid empty state rather than fabricated dates or published articles.

## Studio behavior

The page introduces why the studio exists, the origin, the name and REM meaning, principles, the four approved people, and only source-supported milestones. Do not let the timeline imply company formation or launch dates that are not confirmed.

## Press behavior

Every downloadable package must identify contents, formats, dimensions, file size, updated date, credits, and rights/usage guidance. If those facts are unavailable, show a labeled coming-soon item instead of an unexplained or broken download.

## Contact behavior

Show categories only when a real route exists. With no form provider, render an email fallback. Never simulate submission success.

## Visual and media behavior

- Preserve logo aspect ratio and Trashy silhouette integrity.
- Use approved game/brand art at a meaningful scale, with protected focal points on mobile.
- Do not stretch screenshots into background decoration.
- Media and copy should stay adjacent; captions and controls travel with the media.
- Autoplay, if ever introduced, must be muted, nonessential, user-controllable, and disabled for reduced motion/data preferences where appropriate.

## Structural future-proofing

Use a content model in which the current `Trash Dash` navigation item can become `Games` after a second public title exists. Avoid hard-coding the entire site around exactly one game even though the launch navigation names the current title directly.

