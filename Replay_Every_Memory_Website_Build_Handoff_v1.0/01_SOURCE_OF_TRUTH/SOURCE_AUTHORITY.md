# Source authority and conflict rules

Use this order whenever two files appear to disagree:

1. `FACTUAL_CONTENT_LOCK_v1.1.md`
2. `SPOILER_BOUNDARIES.md`
3. `FINAL_WEBSITE_COPY_v1.1.md`
4. `BRAND_FOUNDATION_APPROVED.md`
5. `WIREFRAME_SPEC.md`, `PAGE_BLUEPRINTS.md`, and `RESPONSIVE_BEHAVIOR.md`
6. Approved assets in `04_BRAND_ASSETS/approved/`
7. The full story, for internal verification only
8. Reference-only imagery and provenance records

Rules:

- Never turn an unresolved item into a public fact.
- Never expose a spoiler because the internal story contains it.
- Where the copy contains a bracketed token, keep it as an internal implementation placeholder or render the supplied honest public fallback. Never publish the bracket syntax.
- The approved high-resolution logo files outrank the low-resolution direction screenshot.
- Wireframes lock information architecture and responsive intent, not final typography or high-fidelity styling.

## Status vocabulary

- **LOCKED** — approved and safe to implement exactly.
- **PUBLIC-SAFE** — derived from approved narrative and safe for public use.
- **PLACEHOLDER** — unresolved; use the documented fallback and do not fabricate.
- **INTERNAL** — useful to the implementation team but not for publication.
- **REFERENCE ONLY** — inspiration or provenance; do not ship without separate rights and approval.

