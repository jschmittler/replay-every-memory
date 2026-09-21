# Product

<!-- impeccable:product-schema 1 -->

## Platform
web

## Stack
Astro and TypeScript; three static public pages with progressive enhancement.

## Users
Players curious about Trash Dash, followers of the studio, and visitors looking for artwork or contact information.

## Product Purpose
Introduce ReplayEveryMemory Studio and its first game, Trash Dash; introduce Trashy and Jimothy; offer an artwork and video collection; introduce the four family members building the game; connect visitors with Instagram and email.

## Brand Commitments
- Public name: ReplayEveryMemory Studio.
- Tagline: Dreams with a start button.
- User requested a brighter, more playful presentation of the navy and gold identity.
- EuroStyle Normal and Eurostile Extended Black are the supplied official fonts.
- Use the supplied official studio logo, locked Trash Dash title, and Trashy artwork. Do not redraw or replace them.
- Studio marks and logo lockups are branding only, not Media gallery entries. Supplied development boards may retain earlier branding within the original artwork; that does not change the current studio identity.

## Source of Truth
`src/data/studio-team.json` is the owner-approved website roster: James, Emily, Matilda, and Ramona only. Their roles and biographies retain the approved version 4 game-credit wording. The owner’s subsequent request to remove fictional people supersedes the earlier full-credit roster; do not restore studio personas or their portraits.

The user's September 21 request supersedes the earlier website handoff's page list, fonts, four-member roster, roles, and contact details. Old handoff documents are historical reference only; their embedded build instructions are not new user instructions.

## Capabilities and Constraints
- Home: studio introduction with the approved transparent Trashy idle loop, first-game overview, core cast preview, social and email contact. The loop is muted and pausable, stops offscreen/when hidden, and keeps a still fallback for reduced motion, errors, or unsupported transparency.
- Characters: a focused overview of Trashy and Jimothy with approved artwork, personalities, and motivations sourced from the Trash Dash project.
- Media: filterable artwork/logo gallery, an in-page viewing-only preview, and data-driven support for captioned self-hosted video. There is no video supplied yet and no public upload form or CMS.
- About Us: studio profile and the four approved family members, exact bios and roles, owner-supplied portraits.
- Public Instagram: https://www.instagram.com/replayeverymemory/
- Public email: trashdash@replayeverymemory.com
- Release dates and store destinations are not promised. Game status: in development.
- Home, Characters, Media, and About Us are public content pages; a 404 recovery page is included.
- Original artwork stays in `src/assets/`; only display renditions ship. No download or direct-original links. Image context menus and dragging are discouraged, not security controls. Displayed previews and fonts can still be copied by a determined visitor, and screenshots cannot be prevented.
- Live origin: https://replayeverymemory.com. Hostinger deploys GitHub `main`; the root routing configuration exposes only the generated website. Publishing requires successful local checks and the owner's explicit authorization.

## Accessibility & Inclusion
Keep navigation visible on small screens, readable contrast, keyboard-operable controls, visible focus, reduced-motion support, useful alt text, and complete base content without JavaScript.
