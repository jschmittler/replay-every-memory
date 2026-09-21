---
name: ReplayEveryMemory Studio
description: A brighter, playful navy and gold studio identity with official EuroStyle lettering and supplied character art.
colors:
  navy: "#091e2a"
  navy-soft: "#163847"
  gold: "#f7c75d"
  sun: "#e9aa2e"
  paper: "#fffdf7"
  cream: "#f5f0e4"
  ink: "#15313e"
  muted: "#4b6068"
  line: "#d8ddd7"
  focus-rust: "#ad470c"
typography:
  display:
    fontFamily: "'Eurostile Extended', sans-serif"
    fontSize: "clamp(2.5rem, 5.2vw, 5rem)"
    fontWeight: 900
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Eurostile Extended', sans-serif"
    fontSize: "clamp(1.95rem, 3.05vw, 3rem)"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Eurostile Extended', sans-serif"
    fontSize: "1.3rem"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'EuroStyle', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
  lede:
    fontFamily: "'EuroStyle', sans-serif"
    fontSize: "clamp(1.2rem, 1.6vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "'EuroStyle', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  control: "12px"
  image: "14px"
  panel: "16px"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(1.25rem, 5vw, 5rem)"
  space: "clamp(4rem, 7.5vw, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: ".9rem 1.35rem"
  button-primary-hover:
    backgroundColor: "{colors.navy-soft}"
  text-link:
    textColor: "{colors.ink}"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: ".6rem 1rem"
  filter-chip-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
  media-empty:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "4.5rem 1.5rem 5rem"
---

# Design System: ReplayEveryMemory Studio

## Overview

**Creative North Star: "Navy and Gold in Sunlight"**

The established navy and gold identity becomes brighter and more playful through sunny fields, warm reading surfaces, confident official lettering, open layouts, and supplied character art. EuroStyle Normal and Eurostile Extended Black, the studio logo, locked Trash Dash title, and Trashy artwork are durable brand commitments; preserve the supplied assets.

This record describes the built Home, Characters, Media, and About Us surfaces. Home introduces the studio, then the first game and a cast preview. Characters gives Trashy and Jimothy dedicated profile space. Its gold hero pairs a studio promise with Trashy; that composition is a current implementation example, not a required opening for every page. Media and About Us use collection and portrait layouts within the shared system.

**Key Characteristics:**

- Sunny gold and warm paper balanced by concentrated navy fields.
- Extended black display lettering paired with regular EuroStyle reading text.
- Official artwork and portraits with open space and restrained framing.
- Flat surfaces, rounded image frames, and small responsive hover movements.
- Visible navigation and candid gallery states.

## Colors

Gold can fill a welcoming section; paper, cream, and dark ink support longer reading. The frontmatter preserves the actual shared palette from `src/styles/global.css`.

### Primary

- **Studio Navy:** Primary controls, selected filters, game-logo stage, and footer use `navy`.
- **Sunny Gold:** Home hero, small circular action, footer heading, text selection, and hover accents use `gold`.
- **Soft Navy:** Primary-button hover uses `navy-soft`.
- **Sun Accent:** Current-page and hovered navigation underlines use `sun`.

### Neutral

- **Warm Paper:** Default page and header background, plus text on navy controls, use `paper`.
- **Studio Cream:** Cast-preview section, media framing and empty state use `cream`.
- **Reading Ink:** Default text and light-surface controls use `ink`.
- **Quiet Text:** Descriptions, biographies, and collection counts use `muted`.
- **Quiet Line:** Media-toolbar dividers use `line`.
- **Focus Rust:** Light-surface focus uses `focus-rust`; footer links use gold against navy.

The Home character circle, About opening, and character-media tile have additional local warm tints. Those art-stage treatments are implementation examples, not a second global palette.

**The Sunlit Gold Rule.** Gold can be a broad background as well as an accent; use navy or reading ink on its light fields.

## Typography

**Display Font:** Eurostile Extended Black, registered as Eurostile Extended, with sans-serif fallback.  
**Body Font:** EuroStyle Normal, registered as EuroStyle, with sans-serif fallback.

**Character:** Wide, heavy display shapes bring the official identity into headings. The regular companion keeps navigation, descriptions, biographies, and controls readable. Both fonts are supplied locally; font synthesis is disabled.

### Hierarchy

- **Display:** The token is the shared heading baseline. About Us and Media use a smaller page-title clamp (2.5rem, 4.4vw, 4.25rem); Home constrains its heading to 14ch on desktop. These are page-specific adjustments.
- **Headline:** Major section headings use the headline token with balanced wrapping, with local size adjustments for their content.
- **Title:** Compact headings use the title baseline. Portrait names and media titles have component-specific sizes and leading.
- **Body:** Reading copy uses the body token and a maximum paragraph measure (68ch).
- **Lede:** Introductory copy uses the fluid lede token; hero and footer copy use narrower measures.
- **Label:** Filters and compact controls use regular EuroStyle. Smaller metadata varies by component; no universal uppercase eyebrow style is established.

**The Official Lettering Rule.** Use the supplied extended black face for headings and the regular face for reading and controls; preserve lettering inside locked logo artwork.

## Layout

The shared container uses the fluid gutter token and a maximum width (1320px). Major sections use the fluid `space` token. Desktop combines asymmetric two-column copy-and-art sections, a four-column cast preview, a three-column full credit grid, and a two-column media collection. Reading content sits directly on section backgrounds.

- Up to 1100px: gaps and hero proportions tighten; the extra contact link disappears while all three main page links remain visible.
- Up to 760px: gutter becomes 1.4rem and major section spacing becomes 4rem. The header stacks the brand above a visible navigation row. Major copy-and-art splits become one column with copy before art; actions wrap. Cast preview and credits use two columns; media remains two columns.
- Up to 520px: credits and media become one column; the media toolbar stacks. Portraits retain square framing with an observed maximum height (420px).
- Up to 360px: gutter becomes 1.1rem, and headings and controls tighten.
- From 1500px: the Home hero gains height and a larger character presentation.

Preserve semantic reading order and wrapping. Long media titles and contact addresses must fit the available width. These thresholds describe implemented layouts, not device categories.

## Elevation & Depth

The build uses no box shadows or artwork drop shadows. Depth comes from color fields, image scale, the circle behind Trashy, and small transforms. Primary buttons rise on hover (2px), portrait previews rise (5px), and the linked game-logo artwork enlarges slightly.

The shared easing is `cubic-bezier(.16,1,.3,1)`. Control transitions run for .2s, portraits for .3s, gallery or logo images for .45s, while the Home hero uses the supplied 4.041-second transparent idle video instead of a CSS entrance. The hero loop is muted, has a Pause/Play control, and pauses outside the viewport or while the page is hidden. Reduced-motion preferences keep the approved still image and disable CSS animation and transitions. If VP9 playback or actual frame transparency is unavailable, the still also remains.

**The Flat Surface Rule.** Separate content with space, tone, and fine rules; the current system does not add shadows to controls, artwork, or containers.

## Shapes

Sections are rectangular fields. Controls use the control radius; portraits and media frames use the image radius; game posters and empty states use the panel radius. Filters are pills. Circles appear in the poster arrow, the development marker, and the hero's background light.

Portraits use square crops. Gallery artwork is contained within wider frames, with a local character crop. Logo lockups keep their proportions. Slight rotations belong to the Home character and About logo compositions, not every container.

## Components

### Buttons and Text Links

Primary actions use navy, paper text, rounded corners, and an inline outlined arrow. Their minimum height is 54px, becoming 50px at 760px with tighter padding. Hover changes to soft navy and lifts; pressing returns to rest. Text links use a minimum height (44px), an underline on hover, and a short arrow translation. Links, buttons, and video expose a focus outline (3px) with offset (5px); footer focus is gold. The skip link appears on focus.

### Navigation

The paper header combines the official studio mark and wordmark treatment with Home, Characters, Media, and About us. Regular EuroStyle links get a sun underline (3px) that grows from the left on hover and identifies `aria-current="page"`. Mobile keeps all four links in a visible second row. Footer navigation repeats those destinations.

### Media Filters

Pills pair category names with counts. Transparent ink controls hover to cream; pressed controls use navy and paper, with `aria-pressed` as the state source. The row wraps responsively. Filters appear through progressive enhancement; the complete base collection remains available without JavaScript.

### Gallery and Empty State

`src/data/media.ts` drives the collection. Rounded image frames have a title, description, and a keyboard-accessible View artwork button. A native dialog displays the web preview with a Close control and a viewing-only notice; Escape closes it and focus returns to the opener. No download controls or direct asset links are offered. Development boards fit fully inside their frames. Cream, navy, and warm character fields are asset-specific presentation variants. Source artwork stays outside the public folder, and a build hook excludes original image files. Context-menu and drag deterrents apply to imagery only; ordinary text selection and browser zoom remain available. Public previews are not copy-proof.

The zero-video view uses a cream panel, outlined video icon, “Still in the making.” heading, honest copy, and Instagram link. Filter changes update a polite live count. There are currently no supplied videos; data-backed videos use native controls, poster, and optional captions when supplied. Do not substitute a playable thumbnail for missing footage.

### Character Profiles, Portraits and Credits

Characters uses the approved Trash Dash character art and dialogue bible to introduce Trashy and Jimothy with their roles, personalities, and motivations. The page is separate from the Media gallery so character art can read as story content rather than a downloadable collection item.

Home and About Us present the four approved family members from `src/data/studio-team.json`: James, Emily, Matilda, and Ramona. About Us uses two columns, reducing to one on small phones. Supplied square portraits sit above extended-face names, roles, and regular-font biographies. The data remains authoritative for names, roles, bios, and order; fictional studio personas are excluded.

### Contact Rows

The navy footer uses a gold heading, light supporting text, and open Instagram and email rows with fine separators. Each row contains a small context label, readable destination, and gold arrow. Long addresses wrap.

## Do's and Don'ts

### Do:

- **Do** retain the brighter navy and gold identity, official fonts, and supplied artwork.
- **Do** use warm reading fields, open spacing, and restrained image framing alongside sunny sections.
- **Do** keep all three navigation links visible and preserve meaningful reading order at every width.
- **Do** preserve visible focus, accessible names, reduced-motion behavior, and forced-colors support.
- **Do** present real media, honest availability, and all approved credits from their data sources.

### Don't:

- **Don't** redraw or replace official logos, locked title artwork, Trashy, or approved portraits.
- **Don't** restore superseded fonts, hidden mobile navigation, or the former game-first hero as system requirements.
- **Don't** make local art crops, rotations, or tints mandatory for every surface.
- **Don't** add fake footage, playback affordances, invented team members, or unsupported release destinations.
- **Don't** add shadows to every content group or place every paragraph in a rounded card.
