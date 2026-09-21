# Responsive behavior matrix

Use content-driven breakpoints; the values below are starting targets, not permission to force layouts that no longer fit.

| Concern | Wide (`>= 75rem`) | Mid (`48–74.99rem`) | Small (`< 48rem`) |
|---|---|---|---|
| Page gutters | Fluid, max-width container | 32–48 px | 20–24 px |
| Header | Full nav + CTA | Full nav if it fits; otherwise menu | Menu trigger + logo |
| Hero | Asymmetric two-region composition | Reduced gap / art scale | Single authored reading sequence |
| Hero order | Copy and art share first viewport | Preserve thesis | Copy before art unless a crop makes art essential first |
| Status facts | Horizontal labeled row | Wrapped row | Vertical list |
| Primary actions | Inline group | Wrap allowed | Full-width or naturally wide, min 44 px target |
| Editorial blocks | Two/three-column where meaningful | Two-column | One column |
| Character features | Alternating copy/media | Reduced alternation | Predictable vertical stack with protected crop |
| Journal index | Featured + list/grid | Two columns | One column |
| Article outline | Sticky side rail if content warrants | Inline or narrow rail | Inline before article |
| Prose | 65–75ch | 65–75ch | Viewport with comfortable padding |
| Gallery | Grid, lightbox optional | Two columns | One column; no tiny thumbnails |
| Team | Four distinct profiles, not equal-card wallpaper | Two columns | One column |
| Footer | Multi-column | Wrapped columns | Stacked by priority |
| Mobile navigation | N/A | When needed | Dedicated overlay/drawer; body scroll locked |

## Reflow rules

- No horizontal page scrolling at 320 CSS px or above.
- Text zoom to 200% must not hide controls or content.
- At 400% zoom / 1280 CSS px equivalent, content must reflow for WCAG expectations with only exceptions that genuinely require two-dimensional layout.
- Do not use fixed heights for copy-led sections.
- Do not bake text into images when HTML text can carry the content.
- Avoid CSS ordering that creates a different keyboard sequence from the visual sequence.

## Media crop rules

- Define focal points in content data, not scattered CSS selectors.
- Trashy's face and running silhouette are protected focal areas.
- Use `object-fit: contain` for logo lockups and `object-fit: cover` only for photographic/game media with an approved crop.
- Provide mobile-specific source/crop only when the art requires it; do not let responsive code distort the source.

## Motion rules

- Content is visible by default.
- Use one coherent motion idea instead of repeated entrance animations.
- No essential information depends on motion.
- `prefers-reduced-motion: reduce` removes nonessential motion and animated scrolling.
- Avoid parallax on small screens and coarse pointers unless testing proves it readable and performant.

