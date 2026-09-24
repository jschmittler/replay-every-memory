---
name: ReplayEveryMemory Studio
description: Studio opening titles in midnight navy and sunlit gold, with official lettering and real game artwork.
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
  woodland: "#e6ede5"
  woodland-ink: "#597166"
  gold-ink: "#70531d"
  gold-hover: "#ffdb8b"
typography:
  display:
    fontFamily: "'Eurostile Extended', sans-serif"
    fontSize: "clamp(2.5rem, 5.2vw, 5rem)"
    fontWeight: 900
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  studio-display:
    fontFamily: "'Eurostile Extended', sans-serif"
    fontSize: "clamp(3.2rem, 5.8vw, 6rem)"
    fontWeight: 900
    lineHeight: 1.1
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
  control: "9px"
  frame: "12px"
  image: "14px"
  panel: "16px"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(1.4rem, 5vw, 5rem)"
  space: "clamp(4.5rem, 8vw, 8rem)"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "1rem 1.45rem"
  button-primary-hover:
    backgroundColor: "{colors.navy-soft}"
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "1rem 1.45rem"
  button-gold-hover:
    backgroundColor: "{colors.gold-hover}"
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

**Creative North Star: "Studio Opening Titles"**

Midnight navy, sunlit gold, oversized official lettering, and the supplied studio insignia introduce a family studio with imagination and heart. Warm reading surfaces and open story spreads give the bold title moments room to breathe. Real woodland layers and expressive character art bring the studio’s work into focus without replacing its identity.

The visual authority is the implemented Astro pages and components, with `src/styles/studio.css` layered after `src/styles/global.css`. The owner delegated this code-led direction; there is no approved image comp and no generated replacement imagery. The surface brief is `.impeccable/review/studio-refresh/direction.md`. This document records the built world; review evidence and final verdict belong to the review record.

**Key Characteristics:**

- Broad navy and gold fields balanced by paper and pale woodland reading surfaces.
- Oversized Eurostile Extended headings paired with regular EuroStyle text.
- Official insignia, locked game lettering, supplied portraits, and real game artwork.
- Open compositions, modest rounded frames, fine rules, and no shadows.
- Static studio mark with bounded atmospheric animation, quiet forest response, and a single character greeting.
- Visible navigation, readable content without scripts, and candid development states.

## Colors

The frontmatter records the shared palette and repeated accents actually used by the final stylesheet cascade. Local art-stage tints remain component treatments rather than a second brand palette.

### Primary

- **Studio Navy:** The header, Home opening, footer, standard buttons, and selected filters use `navy`.
- **Sunny Gold:** The leading action on navy, Home story field, heading emphasis, and small highlights use `gold`.
- **Soft Navy:** Standard button hover and the game stage fallback use `navy-soft`.
- **Sun Accent:** Hovered and current main-navigation underlines use `sun`.
- **Light Gold:** The gold button’s hover uses `gold-hover`.

### Secondary

- **Pale Woodland:** Team and game-exploration sections use `woodland`.
- **Woodland Ink:** Secondary phrases in project and game headings use `woodland-ink`.
- **Warm Gold Ink:** Secondary phrases in headings on gold fields use `gold-ink`.

### Neutral

- **Warm Paper:** Default reading surfaces and text on navy use `paper`.
- **Studio Cream:** Gallery framing and empty states use `cream`.
- **Reading Ink:** Default text and light-surface controls use `ink`.
- **Quiet Text:** Supporting copy, biographies, and counts use `muted`.
- **Quiet Line:** Media dividers and character motivation rules use `line`.
- **Focus Rust:** Light-surface focus uses `focus-rust`; focus in the header, Home opening, and footer uses gold.

**The Navy and Sunlight Rule.** Let navy and gold carry whole sections as well as controls; use light text on navy and dark text on gold, with warm neutral space between major color fields.

## Typography

**Display Font:** Eurostile Extended Black, registered as Eurostile Extended, with sans-serif fallback.  
**Body Font:** EuroStyle Normal, registered as EuroStyle, with sans-serif fallback.

**Character:** The wide, heavy heading face is part of the official identity. Its regular companion carries reading text, navigation, labels, and controls. Both fonts are supplied locally; font synthesis is disabled.

### Hierarchy

- **Studio Display:** The large Home title uses `studio-display` and an intentional desktop measure (12.7ch), with its final phrase in gold. At the stacked breakpoint its size becomes `clamp(2.7rem, 8.4vw, 4.4rem)` and its maximum measure is 14ch.
- **Display:** The shared heading baseline supports page-specific sizes. Games, About, Characters, and Media adapt the size and wrapping to their opening composition.
- **Headline:** Major sections use the headline baseline, with larger editorial phrases in the Home story and smaller collection headings.
- **Title:** Compact headings use the title baseline. Team names and character names receive larger component-specific sizes.
- **Body:** Reading copy uses the body token and a maximum paragraph measure (68ch), with narrower measures in hero and biography components.
- **Lede:** Introductions use the fluid lede token; individual story sections adjust scale and leading.
- **Label:** Controls and metadata use regular EuroStyle. There is no universal uppercase eyebrow treatment.

**The Official Lettering Rule.** Use the supplied extended black face for headings and the regular face for reading and controls; preserve lettering inside locked logo artwork.

## Layout

The container uses the fluid gutter token and a maximum width (1320px). Major sections use the fluid `space` token. Because `studio.css` loads last, these fluid root values remain active at narrow widths; the older mobile root overrides in `global.css` do not define the current spacing. The composition alternates wide color fields, asymmetric two-column openings, open editorial copy, and two-column art or portrait collections.

The implemented Home begins with the studio on navy: an oversized cream/gold title alongside the static studio mark and surrounding mist and fireflies, gold “Meet the team” action to `/about#team`, and “Meet Trash Dash” to `/games`. A real woodland game feature follows, then a gold DIY studio story and shared contact footer. Home contains no team portraits. These are this surface’s choices, not a requirement that every page repeat the hero.

Games is a substantial first-game landing page: introductory title, full-width woodland cinema, development and story details, character/artwork destinations, and a makers invitation. About combines a gold studio opening, expanded origin story, and the approved family profiles. Characters and Media remain separate game-supporting pages beneath Games in navigation.

- Up to 1100px: desktop gaps and hero/art proportions tighten; the extra contact link disappears while the three main links remain visible.
- Up to 760px: the header stacks its brand above the visible navigation. Main splits, game exploration, character profiles, and the About team become one column. The Home game window becomes a tall composition with title/status above Trashy and its action below. Media remains two columns.
- Up to 520px: Media becomes one column and its toolbar stacks.
- Up to 360px: remaining legacy compact adjustments affect selected labels and page titles; the final fluid gutter is retained.
- From 1500px: the Home opening gains height.

Preserve semantic order, independent space for artwork/status/controls, and wrapping of long media titles or contact addresses. In character and team profiles, the name comes before the role.

## Elevation & Depth

The current system has no box shadows or artwork drop shadows. Depth comes from contrasting fields, scale, the atmospheric field, and layered real woodland imagery. A dark gradient at the base of the forest supports foreground text. Buttons rise slightly on hover (2px); game exploration and character artwork scale subtly.

The shared easing is `cubic-bezier(.16,1,.3,1)`. Controls transition over .2s. The studio mark remains static. Teal mist and 48 gold motes animate for up to 4.5 seconds, then settle; pointer movement wakes the surrounding field for 1.2 seconds. The canvas caps pixel density at 2 and stops offscreen, in hidden tabs, and for reduced motion. The intro video has been removed. Woodland foreground response is pointer-driven only on hover-capable devices without reduced motion, bounded to 6px horizontally and 4px vertically, with a .8s transition. Exploration artwork uses .6s and character artwork .45s.

The Home game feature loops the supplied silent transparent Trashy idle animation while it is in view, with no playback button. It loads in view and pauses offscreen or while the page is hidden. Reduced motion, unsupported VP9, failed decoding, or missing decoded transparency retain the supplied belt-up still. Safari always uses that still, with a gentle 2.8s CSS idle motion when motion is allowed. Reduced motion also disables CSS animation and transitions. Static content never waits for a script or animation to become readable.

**The Flat Surface Rule.** Separate content with space, tone, and fine rules; the current system does not add shadows to controls, artwork, or containers.

## Shapes

Sections are rectangular fields. Primary buttons use the control radius; exploration and team frames use the frame radius; gallery and character frames use the image radius; the Home game window and empty state use the panel radius. Filters are pills. The development label is typeset directly over the game scene with a fine separator and no pill background. Dialog-close controls keep their existing local radius (12px).

The studio mark remains upright and unchanged within the restored atmospheric field. Preserve supplied logo proportions. About portraits use gently wide crops (1.15 aspect ratio on desktop, 1.1 when stacked). Gallery boards fit entirely within their frame; character art has dedicated crops. Studio logos and marks must stay straight on with their original proportions, including during animation. Never append captions, subtext, or extra taglines: the full studio logo already contains “Dreams with a start button.”

## Components

### Buttons and Text Links

Confident, compact actions pair regular lettering with an outlined arrow. Navy buttons use paper text; gold buttons use navy text and lead on dark art or studio fields. Minimum height is 54px, becoming 50px at the stacked breakpoint; final padding remains the frontmatter value. Hover changes color and lifts; pressing returns to rest. Text links inherit their surface’s color, occupy at least 44px vertically, underline on hover, and move their arrow by 4px. Focus outlines are 3px with a 5px offset. The skip link appears on focus.

### Navigation

The navy header combines the supplied mark and wordmark treatment with Home, Games, and About Us. A sun underline grows from the left on hover, marks `aria-current="page"`, and keeps Games visually active on Characters and Media. Mobile retains all three links in a visible second row. The footer repeats these destinations.

Characters and Media add a pale game subnavigation: “Games / Trash Dash”, “Characters”, and “Artwork & media”. The current child has `aria-current="page"` and an underline. At the stacked breakpoint the parent link sits above the two child links; touch targets remain at least 44px high.

### Studio Emblem and Game Window

The static Home studio mark fills the larger half of a 47.5/52.5 desktop grid with zero-minimum tracks, preventing the heading from squeezing the artwork. Its 1600px display rendition comes from the existing 4362px source. On phones it stacks below the copy at full content width. The decorative atmospheric canvas spans the whole hero behind both columns, with 80 gold particles and teal mist; particles behind copy have half intensity. The supplied logo stays upright and unaltered. About uses the owner-supplied rem-intro-yellow-simple.mp4 converted to a 1080p VP9 WebM with explicit sRGB transfer metadata, playing once muted for approximately 14 seconds, then holding the final decoded frame in place. It preserves its full 16:9 framing. The About opening uses #edc46c as its fallback, with the film rendered through an sRGB canvas and its background sampled from the actual browser-decoded video/still to eliminate native video-compositor color shifts. The final still is a lossless PNG; no filters or overlays alter the video. Its desktop grid assigns 45% to copy and 55% to the film after spacing, with the column gap equal to the right viewport inset. Phones stack the film at the full content width. An extracted lossless still supports skip and fallbacks. A temporary Skip intro control disappears at completion; reduced motion, no JavaScript, errors, and unsupported playback retain the final logo still.

The first-game window combines supplied distant/foreground forest layers, the locked Trash Dash title, an integrated development label, Trashy, and “Dash into Trashy’s world!” The game CTA belongs below the artwork. Home frames Trashy at the belt at the bottom-right edge, with a 4% frame inset and a 24% horizontal offset to compensate for the transparent tail area, at 150% of the previous figure width (450px desktop, 405px intermediate, 345px mobile, constrained to the frame). Mirror the character presentation so he faces left into the scene; preserve the animation and still-source pixels. The caption moves above him on phones. Keep all of these legible at intermediate widths as well as phones. The Games cinema uses the same real forest language at full width and identifies it as development artwork.

### Character Profiles and Team Portraits

Characters presents approved Trashy and Jimothy art above names, roles, personality copy, and a ruled motivation block. A distinct soft-woodland Meet the villains section follows with owner-supplied Trash Monster and Brutus art. Each villain profile keeps the game's victim-first story truth: the Chapter 1 Trash Monster is refuse animated by Gunk, while Chapter 2’s Brutus recognizes Trashy but cannot control himself. Its standalone page gives the characters story context distinct from the gallery.

About presents James, Emily, Matilda, and Ramona from `src/data/studio-team.json`, in a two-column grid that becomes one column at the stacked breakpoint. Portraits precede names, roles, and regular-font biographies. Preserve the exact approved names, roles, biographies, and order. The Home story directs visitors here without duplicating portraits.

### Media Filters

Category pills pair labels with counts. Transparent ink controls hover to cream; `aria-pressed` selects navy with paper text. The row wraps. Filters progressively enhance the complete static collection; all artwork remains readable without JavaScript. Filter changes update a polite live count.

### Gallery and Empty State

The data-driven gallery uses rounded frames, titles, descriptions, and progressively enhanced View artwork controls. A native dialog displays the web preview, title, Close control, and viewing notice. Escape and backdrop clicks close it; native dialog behavior returns focus to the opener. Development boards fit fully inside their frames. Gallery videos, starting with “How it started”, use native controls, a poster, and captions when supplied, and never autoplay. Any filter with no items shows an honest “Still in the making.” state and follow-along link; the Home character loop is not a gallery video.

Display previews provide no download buttons or direct asset links. Original artwork stays outside the public folder and is excluded by the build pipeline. Image/video context-menu and drag deterrents do not disable ordinary text selection or browser zoom. Public previews are not copy-proof.

### Contact Rows

The navy footer uses a gold heading, light supporting text, privacy copy, and open Instagram/email rows with fine separators. Each row pairs a small context label, readable destination, and gold arrow. Long addresses wrap and external links identify their new-tab behavior accessibly.

## Do's and Don'ts

### Do:

- **Do** preserve the official navy/gold identity, EuroStyle fonts, supplied logos, portraits, and game artwork.
- **Do** balance broad color fields with warm reading surfaces, generous spacing, and restrained frames.
- **Do** retain visible Home, Games, and About Us navigation and the game-specific child navigation.
- **Do** keep names before roles and preserve the exact approved team data.
- **Do** preserve visible focus, accessible names, reduced-motion behavior, and forced-colors support.
- **Do** keep media honest, static content available without scripts, and animation controls clear of artwork and labels.

### Don't:

- **Don't** redraw official artwork or replace the supplied typefaces with generic alternatives.
- **Don't** reintroduce the superseded gold Trashy Home hero or Home portrait strip as the current design direction.
- **Don't** invent footage, release destinations, team members, or claims of copy-proof public previews.
- **Don't** force every surface to repeat the Home atmosphere or art crops.
- **Don't** add shadows to content groups or place every paragraph inside a rounded card.

### Standing character artwork

Games and Characters use `StandingCharacter.astro` to frame the supplied full standing poses. Jimothy uses the owner’s `Jimothy-Regular.png`, replacing the earlier dialogue portrait. Measured visible bounds plus breathing room remove excess transparent canvas in CSS without modifying the original artwork. The Games preview uses a chest-up composition with Trashy on the left, slightly in front of Jimothy on the right; layer order and vertical offsets reinforce that relationship. Characters keeps both full standing poses. The homepage animated Trashy remains in `TrashyArt.astro`.
