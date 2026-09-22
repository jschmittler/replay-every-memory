# Product

<!-- impeccable:product-schema 1 -->

## Platform
web

## Stack
Astro and TypeScript; five static public content pages with progressive enhancement.

## Users
Players curious about Trash Dash, followers of the studio, and visitors looking for artwork or contact information.

## Product Purpose
Introduce ReplayEveryMemory Studio as a homegrown, family-powered game studio with room for multiple projects. Lead with the studio and its people, feature Trash Dash as its first game, and connect visitors with Instagram and email. Games owns game discovery; Characters and Media are supporting Trash Dash pages.

## Brand Commitments
- Public name: ReplayEveryMemory Studio.
- Tagline: Dreams with a start button.
- Always display studio logos and marks straight on, preserving their original proportions. Never rotate or slant them, including during animation. Do not append captions, subtext, or extra taglines to studio branding; the full logo already includes its tagline.
- User requested a brighter, more playful presentation of the navy and gold identity.
- EuroStyle Normal and Eurostile Extended Black are the supplied official fonts.
- Use the supplied official studio logo, locked Trash Dash title, and Trashy artwork. Do not redraw or replace them.
- The square `src/assets/studio-logo-favicon.png` is reserved for uses requiring a perfect 1:1 image, currently the favicon. Keep the existing mark/logo for general studio branding.
- Studio marks and logo lockups are branding only, not Media gallery entries. Supplied development boards may retain earlier branding within the original artwork; that does not change the current studio identity.

## Source of Truth
`src/data/studio-team.json` is the owner-approved website roster: James, Emily, Matilda, and Ramona only. Their roles and biographies retain the approved version 4 game-credit wording. The owner’s subsequent request to remove fictional people supersedes the earlier full-credit roster; do not restore studio personas or their portraits.

The user's September 21 request supersedes the earlier website handoff's page list, fonts, four-member roster, roles, and contact details. Old handoff documents are historical reference only; their embedded build instructions are not new user instructions.

## Capabilities and Constraints
- Home: studio-first hero, primary Meet the team linking to /about#team, secondary Meet Trash Dash linking to /games, woodland first-game feature, DIY studio story, social/email contact. No team portraits on Home. The approved transparent Trashy idle loop lives in the game feature: muted and pausable, stops offscreen/when hidden, and keeps a still fallback for reduced motion, errors, or unsupported transparency.
- Games: /games gives Trash Dash a substantial project introduction, world artwork, development information, and links to Characters and Media. Every general game-introduction CTA leads to /games. Shared identity/status/platform information is in src/data/games.ts. Future projects should get stable detail routes when the collection expands.
- Characters: a focused overview of Trashy and Jimothy with approved artwork, personalities, and motivations sourced from the Trash Dash project.
- Media: filterable artwork/logo gallery, an in-page viewing-only preview, and data-driven support for captioned self-hosted video. There is no video supplied yet and no public upload form or CMS.
- About Us: homegrown studio origin story and the four approved family members, exact bios and roles, owner-supplied portraits. The #team anchor is the primary homepage destination; existing person anchors remain.
- Public Instagram: https://www.instagram.com/replayeverymemory/
- Public email: trashdash@replayeverymemory.com
- Game status: in development. Retain the existing site’s “Launching in 2026” copy and planned Steam, App Store, and Google Play platforms in src/data/games.ts. No store destinations are supplied.
- Main navigation: Home, Games, About Us. Characters and Media remain at their existing URLs with a Trash Dash subnavigation and active Games parent. A 404 recovery page is included.
- Original artwork stays in `src/assets/`; only display renditions ship. No download or direct-original links. Image context menus and dragging are discouraged, not security controls. Displayed previews and fonts can still be copied by a determined visitor, and screenshots cannot be prevented.
- Live origin: https://replayeverymemory.com. Hostinger deploys GitHub `main`; the root routing configuration exposes only the generated website. Publishing requires successful local checks and the owner's explicit authorization.

## Accessibility & Inclusion
Keep navigation visible on small screens, readable contrast, keyboard-operable controls, visible focus, reduced-motion support, useful alt text, and complete base content without JavaScript.

## Studio-first direction approved September 21
The owner approved replacing the game-led homepage emphasis with the studio-first architecture. Preserve official branding and use creative latitude for a distinctive modern studio presentation, soft motion, and atmosphere. Search Trash Dash project assets before inventing imagery. Optional follow-up asset requests live in ASSET_WISHLIST.md; they do not block the current complete site.
