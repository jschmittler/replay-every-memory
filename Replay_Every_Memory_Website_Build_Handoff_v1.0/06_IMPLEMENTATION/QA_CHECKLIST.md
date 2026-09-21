# QA checklist

## Build checks

- Install with the repository's locked package manager.
- Run formatter check, lint, type check, tests, and production build.
- Serve the built output, not only the development server.
- Fail on broken internal links, missing local assets, placeholder tokens, and empty `href` values.

## Content safety scans

Scan public built output case-insensitively for:

- Superseded identity and fictional roster terms listed in the factual lock.
- Every Tier 2 and Tier 3 story term.
- `TODO`, `TBD`, `FIXME`, `[CONFIRM`, `[ARTICLE`, and unresolved template syntax.
- The full-story source filename or large narrative excerpts.

Review matches; expected mentions in private build documentation do not authorize a public match.

## Viewports

- 320 × 800
- 390 × 844
- 768 × 1024
- 1024 × 768
- 1440 × 1000
- 1920 × 1080

For each public route, capture 390 and 1440 references from the document top after fonts/media settle.

## Interaction states

- Mobile navigation: open, close button, Escape, link activation, focus trap/containment, focus return, body scroll lock.
- Journal filters: keyboard operation, current state, empty state, history/URL behavior if implemented.
- Gallery: previous/next, close, focus management, missing media.
- Contact: required, invalid email, sending, success, failure, and fallback. Test success only with a real configured endpoint.
- External destinations: only real configured URLs become links.

## Accessibility

- Automated scan of every page and important state.
- Keyboard-only pass.
- Screen-reader landmark, heading, link, button, field, error, and status spot check.
- 200% text zoom.
- 400% reflow spot check at desktop reference.
- Forced-colors/high-contrast spot check where supported.
- Reduced-motion mode.
- Contrast measurement from final computed colors.

## Performance

- No layout shift from images or fonts.
- No unnecessary third-party requests.
- No full internal story or reference-only images in bundles.
- Responsive image widths and modern formats.
- JavaScript disabled smoke test for content and navigation.

## Final evidence

Record commands, versions, pass/fail totals, screenshots, known limitations, and remaining open items in the production repository.
