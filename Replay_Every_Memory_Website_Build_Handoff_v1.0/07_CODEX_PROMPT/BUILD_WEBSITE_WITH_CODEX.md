# Codex prompt — build the Replay Every Memory production website

Copy the prompt below into a Codex task opened in the target website repository. Place the unzipped `Replay_Every_Memory_Website_Build_Handoff_v1.0` folder in or beside that repository so Codex can read it, and replace `<HANDOFF_PATH>` if necessary.

---

Build the production Replay Every Memory website from the handoff package at `<HANDOFF_PATH>`. If that placeholder is unchanged, locate the single directory named `Replay_Every_Memory_Website_Build_Handoff_v1.0` in the current workspace and use it.

## Outcome

Deliver a complete, production-quality, responsive, accessible website for Replay Every Memory and its first game, *Trash Dash*. Implement the approved game-first information architecture, final copy, factual lock, spoiler boundaries, responsive behavior, and brand assets faithfully. The result must be runnable, tested, visually coherent, and ready for the unresolved launch integrations to be configured later without fabricated facts or broken UI.

## Authority

Read the package before editing. Resolve conflicts in this order:

1. `01_SOURCE_OF_TRUTH/SOURCE_AUTHORITY.md`
2. `01_SOURCE_OF_TRUTH/FACTUAL_CONTENT_LOCK_v1.1.md`
3. `01_SOURCE_OF_TRUTH/SPOILER_BOUNDARIES.md`
4. `02_WEBSITE_COPY/FINAL_WEBSITE_COPY_v1.1.md`
5. `01_SOURCE_OF_TRUTH/BRAND_FOUNDATION_APPROVED.md`
6. `03_WIREFRAMES/specs/`
7. `06_IMPLEMENTATION/`
8. Approved assets in `04_BRAND_ASSETS/approved/`

The full story is internal verification material only. `04_BRAND_ASSETS/reference_only/` is inspiration/provenance only and must not ship.

## Locked truths

- Public studio name: Replay Every Memory.
- Supporting monogram: REM.
- Tagline: Dreams with a start button.
- Descriptor: Independent Game Studio.
- First title: *Trash Dash*.
- Status: in development, launching in 2026.
- Platforms: Steam, App Store, Google Play.
- Current milestone: RC1 is in beta testing while story, direction, art, animation, levels, systems, and production continue.
- Trailer, demo, and storefront pages: coming soon.
- Current primary action: Follow Development. Route it to `/journal` until a configured real destination exists.
- Public email: trashy@replayeverymemory.com.
- Public handle: @replayeverymemory.
- Team: James — Founder, Creative Director & Lead Designer; Emily — CFO & CMO; Ramona — Music Director, Playtester & Animation Specialist; Matilda — Lead Artist, Playtester, Lead Character Designer & Level Builder.

Never restore the superseded studio identity or fictional provisional roster documented in the factual lock. Never add unsupported gameplay, legal, business, release, accessibility-conformance, partner, award, press, testimonial, customer, or metric claims.

## Work approach

Inspect the repository and any `AGENTS.md`, package, build, content, design-token, and deployment conventions first.

- Preserve the existing supported stack and project conventions when present.
- If the repository is empty, use Astro with TypeScript, content collections, semantic HTML, modern CSS, and minimal client JavaScript. Use the repository's preferred package manager if one is already established.
- Keep content/configuration separate from page components.
- Reuse existing quality tools when available.
- Do not add a CMS, analytics vendor, form vendor, animation library, component framework, or hosting service unless the repository already uses it or the user separately authorizes it.
- Make normal in-scope local changes and run non-destructive checks without pausing. Ask only when a missing decision would materially change public facts, external services, destructive work, cost, or deployment.
- Do not deploy, publish, create accounts, connect domains, transmit form data, or perform external writes unless explicitly asked.

Create or maintain a concise task plan, then implement through verification. Do not stop at a scaffold or a homepage. Complete every required route and important state.

## Required routes

- `/`
- `/trash-dash`
- `/journal`
- `/journal/[slug]`
- `/studio`
- `/press`
- `/contact`
- `/accessibility`
- `/privacy`
- custom 404

The content model must allow the current `Trash Dash` navigation item to evolve into `Games` after a second public title exists, without rebuilding the site shell.

## Content rules

Use `02_WEBSITE_COPY/FINAL_WEBSITE_COPY_v1.1.md` as the public copy source. Preserve wording and approved facts. HTML-semantic line-break and punctuation normalization is allowed; substantive rewriting is not.

- Do not render implementation notes.
- Bracketed fields are editorial/configuration fields, never public copy.
- Do not publish the sample Journal treatments as real dated posts. Use them as draft fixtures only, or render the approved candid empty state until real posts are supplied.
- Do not invent dates, article counts, bylines, store links, social URLs, media, downloads, or success states.
- Do not use `href="#"`, empty links, fake buttons, or controls without behavior.
- Optional destination absent: show the documented plain-text or coming-soon fallback.
- Do not copy the full story into `public/`, client content, source maps, generated search data, test fixtures that ship, or the browser bundle.

Before completion, scan the built public output for placeholder tokens, the superseded identity, the fictional roster, and every Tier 2/Tier 3 spoiler term. Fix all unauthorized matches.

## Visual direction

Implement **The Playable Memory**: a game-led, expressive, character-first website that feels made by people who care about play, but remains clear and useful. It must not become a fake console menu, pixel-art skin, HUD, achievement interface, retro collage, or novelty interaction.

Use the approved navy/gold logo world as the visual anchor. Establish accessible neutral surfaces and a documented token system. Use real approved character/game media at meaningful scale when it exists; use the honest media states when it does not.

The first viewport is a thesis. Without autoplay, scrolling, sound, hover, or animation, it must make clear:

- Replay Every Memory made this.
- *Trash Dash* is the current title.
- It is a colorful, character-driven platforming adventure.
- It is in development for 2026.
- Follow Development is the useful next action.

Use the supplied logo masters without distortion, tracing, recoloring, or decorative effects. Optimize responsive derivatives but preserve masters. Never ship files from `reference_only/`.

Typography beyond the logo is open. Choose licensed, performant web type that is readable and has a point of view appropriate to the approved mark. Document sources, weights, subsets, fallbacks, and licensing. Do not approximate the logo lettering with a poor system-font imitation.

Vary section scale and density while keeping one coherent grid, spacing rhythm, and component language. Let media, typography, and character silhouettes do the work; do not fill the site with repetitive same-size cards. Keep body text near 65–75 characters per line.

Implement all meaningful states: hover where available, focus, active/current, disabled, loading, empty, unavailable, success, and failure. Theme selection, focus, link underlines, and other browser-level details from the final design system.

## Responsive behavior

Use the specs in `03_WIREFRAMES/specs/`. Validate at 320, 390, 768, 1024, 1440, and 1920 CSS pixels.

- No horizontal page overflow.
- Mobile is an authored reading sequence, not compressed desktop.
- Use copy before hero art on small screens unless the final approved composition proves another accessible DOM order.
- Stack status facts and make actions touch friendly.
- Keep media beside the copy it proves.
- Protect Trashy's face and running silhouette in crops.
- Move the Journal article outline into normal flow on small screens.
- Avoid fixed heights for copy-led modules.
- Avoid visual reordering that conflicts with DOM and keyboard order.

Build a mobile navigation state with a clear trigger and close control, current-page indication, keyboard access, Escape close, focus containment/management, focus return, and background scroll lock.

## Accessibility

Target WCAG 2.2 Level AA in implementation and testing, but do not publish a conformance claim.

Include:

- A skip link.
- Semantic landmarks and logical headings with one `h1` per page.
- Full keyboard operation.
- Visible focus and adequate contrast.
- Pointer targets near or above 44 × 44 CSS px where practical.
- Meaningful, spoiler-safe alt text and empty alt text for decorative repetition.
- Labeled forms, associated descriptions/errors, an error summary, and clear recovery.
- Accessible status announcements.
- Content visible by default and a complete reduced-motion mode.
- No information that depends on color, motion, hover, position, or sound alone.
- 200% text zoom and 400% reflow checks.
- Accessible media controls, captions, and transcripts when real media is added.

The site must work without autoplay, sound, hover, and nonessential motion.

## Interactions and progressive enhancement

Core content and navigation must work without client JavaScript. Use client code only for behavior that needs it.

Implement real behavior for:

- Primary and mobile navigation.
- Journal filtering and empty states.
- Gallery/media navigation when approved media exists.
- Contact form or email fallback.
- 404 recovery.

Use one coherent motion idea at most. No scroll hijacking, cursor replacement, blanket entrance animation, or hover-only control. Respect reduced motion and keep content visible before enhancement.

## Unresolved configuration

Implement the optional configuration contract in `06_IMPLEMENTATION/CONFIGURATION_CONTRACT.md` using the target stack's conventions.

- No `SITE_URL`: omit invalid canonical and absolute metadata.
- No `FOLLOW_URL`: `/journal`.
- No trailer/store URL: text-only coming-soon state.
- No social URL: show the handle as text or omit the platform.
- Analytics disabled or absent: load no analytics code.
- Contact form disabled or absent: use a working `mailto:` fallback and no false submit UI.
- Press package incomplete: render a labeled coming-soon item, not a broken download.

Validate configured public URLs at build time. Keep secrets server-side.

## Privacy and launch safety

Default analytics and third-party tracking to off. Do not add advertising pixels, cross-site tracking, session replay, or unnecessary cookies.

If a real form is already configured, minimize data, validate server-side, add suitable spam controls, prevent sensitive content from reaching analytics/logs, and make the privacy notice match actual providers and retention. Otherwise use email fallback.

Treat the provider-specific privacy notice as a public launch gate. A polished page with generic placeholder legal language is not launch-ready.

## SEO and public metadata

Implement supplied titles and descriptions. Add Open Graph and social metadata only with public-safe copy and approved assets. Generate canonical URLs only from a valid configured site origin. Prevent preview/staging indexing.

Use structured data only for verified facts. Omit uncertain legal entity suffix, registered mark, exact release date, price, rating, and unconfirmed store/profile URLs. Spoiler rules apply to metadata, image filenames, captions, alt text, JSON-LD, sitemaps, RSS, and source comments.

## Performance and security

- Static-first content rendering.
- Responsive images with intrinsic sizes and modern formats.
- No unused reference imagery or internal story in bundles.
- Small, route-scoped client JavaScript.
- No unnecessary third-party requests.
- Avoid layout shift from fonts and media.
- Sanitize Markdown/CMS content.
- No secrets in client output.
- Add security headers appropriate to the actual deployment target without breaking required assets.
- Avoid unrelated dependency upgrades.

## Verification

Run the repository's format check, lint, type check, tests, and production build. Add missing focused tests where they protect the requirements.

Serve and test the production output. Complete:

1. Internal-link and missing-asset check.
2. Placeholder, superseded-name, fictional-roster, and spoiler scan of built public output.
3. Automated accessibility scan for every route and important state.
4. Keyboard-only pass.
5. Desktop and mobile screenshots for every route at 1440 and 390 from the document top after content settles.
6. No-horizontal-overflow checks at all required widths.
7. Mobile menu behavior and focus/scroll-lock checks.
8. No-JavaScript smoke test for core content and navigation.
9. 404, missing media, empty Journal, failed contact/fallback, and absent optional URL states.
10. Basic performance review and confirmation that internal/reference assets did not ship.

Use `06_IMPLEMENTATION/ACCEPTANCE_CRITERIA.md` and `06_IMPLEMENTATION/QA_CHECKLIST.md` as final gates. Fix material failures in one bounded batch, rerun the affected checks, and stop only when the site meets the criteria or a genuinely external/user decision blocks completion.

## Deliverables in the production repository

- Complete runnable source for every required route and state.
- Reusable components and structured content/configuration.
- Optimized approved assets with provenance retained.
- Setup, development, test, build, and deployment instructions.
- Content-editing instructions for Journal, game, team, press, and settings.
- Environment/configuration reference with honest fallbacks.
- Final route and asset inventories.
- Accessibility and performance results with known limitations.
- Desktop/mobile review screenshots.
- Updated unresolved-items/launch-gates list.
- A concise final report leading with what is complete, validations run, remaining blockers, and exact file locations.

Do not claim deployment or public launch readiness if hosting, domain, provider-specific privacy language, real form delivery, or other documented launch gates remain unresolved.
