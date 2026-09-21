# Production website implementation requirements

## Outcome

Build a production-quality, responsive, accessible Replay Every Memory website that faithfully implements the approved game-first information architecture, copy, facts, spoiler limits, and logo assets in this handoff.

## Repository strategy

1. Inspect the target repository before choosing tools.
2. Preserve an existing supported framework, package manager, linting, test, content, and deployment convention unless it materially prevents the requirements.
3. If the target is empty, use Astro with TypeScript, content collections, semantic HTML, modern CSS, and minimal client JavaScript. Explain the choice in the project README.
4. Do not add a CMS, analytics service, form provider, hosting provider, animation library, or component framework unless the repository already uses it or the user approves it.
5. Keep content and configuration separate from page components.

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

Add RSS and sitemap output only when the framework supports them cleanly and every public URL is known. Do not emit a fake production domain.

## Content implementation

- Treat `01_SOURCE_OF_TRUTH/SOURCE_AUTHORITY.md` as the conflict resolver.
- Use `02_WEBSITE_COPY/FINAL_WEBSITE_COPY_v1.1.md` verbatim except for punctuation/line-break adjustments required by HTML semantics or an explicitly approved content correction.
- Keep implementation notes out of rendered output.
- Keep draft Journal treatments unpublished until dates and media are approved.
- Make all unresolved values typed optional configuration.
- Render the documented fallback when an optional destination is absent.
- Do not ship placeholder syntax, `TODO`, `TBD`, `FIXME`, dummy links, `href="#"`, or buttons with no effect.
- Do not expose the full internal story in a public directory, client bundle, search index, source map, or CMS fixture.

## Design direction

- Use **The Playable Memory**: game-led, expressive, tactile, character-first, and clear.
- Do not turn the site into a fake console menu, pixel-art skin, HUD, achievement system, or nostalgia collage.
- Use the approved navy/gold logo world as evidence, then define accessible production neutrals and tokens.
- Let real game and character media carry visual interest when approved assets exist.
- Do not manufacture decorative game screenshots or redraw the logo.
- Typography must be licensed, performant, and readable; record final font sources and fallbacks.
- Use generous scale changes and varied section density while keeping one coherent grid and spacing rhythm.

## Logo and media

- Use `rem-horizontal-lockup-full-color-3600x1038.png` where the full lockup is legible.
- Use `rem-icon-full-color.png` for compact brand contexts.
- Use `rem-wordmark-navy.png`, `rem-wordmark-gold.png`, `trashy-running-silhouette.png`, and `rem-tagline-lockup.png` only when the composition needs separated approved elements.
- The low-resolution direction source is provenance, not the production asset.
- Files in `reference_only/` are inspiration and must never ship.
- Create optimized responsive derivatives for the website while preserving the masters. Prefer AVIF/WebP with a safe fallback where supported.
- Keep meaningful alt text in content data. Use empty alt text for purely decorative repetitions of nearby text.
- Do not name spoiler content in alt text or public filenames.

## Accessibility target

Target WCAG 2.2 Level AA and verify, without publishing a conformance claim.

Required:

- One visible-on-focus skip link.
- Semantic header, nav, main, footer, article, section, and form landmarks.
- One page-level `h1`; logical heading order below it.
- Keyboard operation for navigation, filters, gallery controls, mobile menu, forms, and any modal/lightbox.
- Visible focus with at least 3:1 contrast against adjacent colors.
- Body text contrast of at least 4.5:1 and large text at least 3:1.
- Pointer targets at least 44 by 44 CSS px where practical.
- Labels, descriptions, error associations, error summary, and recovery guidance for forms.
- Mobile menu focus management, Escape close, focus return, and background scroll lock.
- No information conveyed by color, hover, motion, position, or sound alone.
- Reduced-motion handling and content visible by default.
- 200% text zoom and responsive reflow without loss.
- Meaningful page titles, link purpose, alternative text, and status announcements.
- Accessible media controls and captions/transcripts when real video/audio is added.

## Responsive behavior

- Validate at minimum: 320, 390, 768, 1024, 1440, and 1920 CSS px.
- No horizontal page overflow.
- Mobile is an authored reading sequence, not a squeezed desktop.
- Hero copy precedes art on small screens unless an approved composition explicitly proves a different accessible order.
- Status facts stack on small screens.
- Actions stay clear and touch friendly.
- Protected character focal points survive crop changes.
- Article navigation and outline enter normal flow on small screens.
- Avoid fixed copy-section heights and layout ordering that differs from DOM order.

## Interaction and motion

- Build working navigation, filters, mobile menu, form fallback, gallery state, and recovery actions.
- Use progressive enhancement; core content and navigation work without client JavaScript.
- Do not use autoplay as the only first-viewport proof.
- Use one purposeful motion system at most; avoid repeated reveal animations.
- Pause or remove nonessential motion for reduced-motion preferences.
- No scroll hijacking, cursor replacement, or inaccessible hover-only controls.

## Privacy and forms

- Default analytics to off.
- Default the contact experience to the approved email fallback.
- If a form provider is later configured, validate server-side, minimize data, add spam protection, document retention, and update the privacy notice.
- Never log full form messages or email addresses to client analytics.
- Do not claim successful delivery without a verified provider response.
- Block production launch of an incomplete provider-specific privacy notice if any data service is enabled.

## SEO and metadata

- Implement the supplied page titles and descriptions.
- Add Open Graph/Twitter metadata only with public-safe approved copy and assets.
- Use canonical URLs only when `SITE_URL` is valid.
- Generate robots and sitemap rules appropriate to the actual environment; prevent preview/staging indexing.
- Use structured data only for verified organization/game facts. Omit uncertain legal entity, release date, price, rating, and store URLs.
- Ensure Tier 2/Tier 3 spoilers do not leak through metadata or structured data.

## Performance

- Static-first rendering for content pages.
- Avoid shipping the full story or unused reference imagery.
- Responsive images with intrinsic dimensions to prevent layout shift.
- Self-host fonts when licensing permits; subset and preload only critical faces.
- Keep client JavaScript small and route-specific.
- Avoid third-party scripts by default.
- Target good Core Web Vitals on representative mobile hardware and connections.

## Security and quality

- No secrets in client code.
- Sanitize/render CMS or Markdown content safely.
- Add security headers appropriate to the deployment target.
- Use valid HTML and resilient error handling.
- Configure external links safely.
- Keep dependencies current within the repository's compatibility range; do not perform unrelated upgrades.

## Required validation

- Formatting, lint, type check, unit tests, and production build.
- Internal-link and missing-asset check.
- Placeholder/superseded-name/spoiler scan over built output.
- Automated accessibility scan for every route and important state.
- Keyboard-only manual pass.
- Desktop and mobile screenshots for every route.
- Mobile menu open/close/focus/scroll-lock test.
- No-JavaScript smoke test for core content/navigation.
- 404, missing media, empty Journal, failed form/fallback, and absent optional URL states.
- ZIP/press download checks when real downloads are added.

## Handoff from the production build

Deliver:

- Runnable source.
- Setup, build, test, and deploy instructions.
- Content editing instructions.
- Environment/configuration reference.
- Final route inventory.
- Final asset inventory and licenses/provenance.
- Accessibility test results and remaining known issues.
- Performance results.
- Screenshots at desktop and mobile references.
- An updated open-items list.

