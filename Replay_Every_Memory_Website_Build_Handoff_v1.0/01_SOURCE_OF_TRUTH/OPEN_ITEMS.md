# Unresolved items and approved fallbacks

These items are intentionally unresolved. The production build must expose configuration points without inventing values.

| Item | Internal token | Public fallback now | Launch gate |
|---|---|---|---|
| Canonical domain | `SITE_URL` | Relative URLs; omit canonical if invalid | Confirm owned production domain |
| Social URLs | `SOCIAL_URLS` | Display `@replayeverymemory` as text only or omit link | Confirm each profile URL |
| Follow destination | `FOLLOW_URL` | `/journal` | Confirm newsletter/social/store destination |
| Trailer URL | `TRAILER_URL` | “Trailer coming soon” non-link state | Confirm public video URL |
| Demo URL | `DEMO_URL` | “Demo coming soon” non-link state | Confirm public download/store URL |
| Steam URL | `STEAM_URL` | Platform name, no link | Confirm store page |
| App Store URL | `APP_STORE_URL` | Platform name, no link | Confirm store page |
| Google Play URL | `GOOGLE_PLAY_URL` | Platform name, no link | Confirm store page |
| Press downloads | `PRESS_ASSETS` | Labeled coming-soon list | Approve packages, rights, dimensions, and credits |
| Journal entries | `JOURNAL_ENTRIES` | Clearly labeled sample/draft posts or a candid empty state | Approve real posts and dates |
| Trash Dash launch month/day | `RELEASE_DATE` | “Launching in 2026” | Confirm date |
| Trash Dash start date | `PROJECT_START_DATE` | Omit date | Confirm source record |
| Legal entity | `LEGAL_ENTITY` | “Replay Every Memory” | Confirm formation/name |
| Trademark symbol | `TRADEMARK_STYLE` | No symbol by default | Confirm studio preference and counsel |
| Analytics | `ANALYTICS_PROVIDER` | None | Privacy/legal approval and configuration |
| Contact form | `FORM_PROVIDER` | `mailto:` fallback | Provider, spam controls, privacy review |
| CMS | `CMS_PROVIDER` | Local content collection | Select provider and editorial workflow |
| Hosting | `HOSTING_PROVIDER` | None | Select and configure target |
| Typography | `FONT_FAMILIES` | Accessible local/system fallback during development | License and approve production web fonts |
| Final high-fidelity visual system | `DESIGN_TOKENS` | Derive a restrained accessible working system from approved logo | Complete and approve visual design pass |
| Gameplay gallery | `GAME_MEDIA` | Honest media-unavailable state | Approve captures, crops, captions, alt text |

No placeholder token should appear in public rendered text. Add a production validation that fails when bracketed tokens or the strings `TODO`, `TBD`, or `FIXME` reach the built output, except in explicitly ignored development documentation.
