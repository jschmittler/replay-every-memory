> Historical reference only. Current authority: root PRODUCT.md and src/data/studio-team.json. The September 21 brief supersedes old scope, fonts, roles, and contact details.

# Replay Every Memory website build handoff v1.0

This is a self-contained implementation handoff for the production Replay Every Memory website. It consolidates the approved brand foundation, corrected factual content lock v1.1, public copy, responsive wireframe system, approved brand assets, internal Trash Dash story, implementation requirements, manifests, and one Codex-ready build prompt.

## Start here

1. Read `00_START_HERE/QUICK_START.md`.
2. Read `01_SOURCE_OF_TRUTH/SOURCE_AUTHORITY.md` and `FACTUAL_CONTENT_LOCK_v1.1.md`.
3. Review the runnable low-fidelity reference at `03_WIREFRAMES/prototype/index.html`.
4. Put this folder in or beside the target website repository.
5. Give Codex the prompt in `07_CODEX_PROMPT/BUILD_WEBSITE_WITH_CODEX.md`.

## Authority

The factual lock and spoiler boundaries outrank copy, wireframes, story, and reference material. `01_SOURCE_OF_TRUTH/SOURCE_AUTHORITY.md` contains the complete conflict rule.

## Package map

```text
Replay_Every_Memory_Website_Build_Handoff_v1.0/
├── README.md
├── 00_START_HERE/
│   └── QUICK_START.md
├── 01_SOURCE_OF_TRUTH/
│   ├── SOURCE_AUTHORITY.md
│   ├── BRAND_FOUNDATION_APPROVED.md
│   ├── FACTUAL_CONTENT_LOCK_v1.1.md
│   ├── SPOILER_BOUNDARIES.md
│   └── OPEN_ITEMS.md
├── 02_WEBSITE_COPY/
│   └── FINAL_WEBSITE_COPY_v1.1.md
├── 03_WIREFRAMES/
│   ├── prototype/
│   └── specs/
├── 04_BRAND_ASSETS/
│   ├── approved/
│   └── reference_only/
├── 05_STORY_SOURCE/
│   └── trash-dash-full-story.md
├── 06_IMPLEMENTATION/
│   ├── PRODUCT.md
│   ├── IMPLEMENTATION_REQUIREMENTS.md
│   ├── ACCEPTANCE_CRITERIA.md
│   ├── CONFIGURATION_CONTRACT.md
│   └── QA_CHECKLIST.md
├── 07_CODEX_PROMPT/
│   └── BUILD_WEBSITE_WITH_CODEX.md
├── 08_MANIFESTS/
│   ├── ASSET_MANIFEST.md
│   ├── asset-manifest.json
│   ├── FILE_MANIFEST.json
│   └── SHA256SUMS.txt
└── 09_PROVENANCE/
    ├── DECISION_LOG.md
    ├── RECOVERY_AND_PROVENANCE.md
    └── recovered-final-copy-thread-fragment.txt
```

## Locked public facts

- Replay Every Memory
- Dreams with a start button.
- Independent Game Studio
- *Trash Dash*
- In development; launching in 2026
- Steam, App Store, Google Play
- RC1 in beta testing
- Follow Development as the current primary action
- trashy@replayeverymemory.com
- @replayeverymemory
- James, Emily, Ramona, and Matilda with the roles in the factual lock

## Important boundaries

- The full story is internal and contains major spoilers.
- Reference-only logo inspiration must not ship.
- The exact domain, social links, store links, trailer, demo, press packages, legal entity, trademark style, analytics, form provider, CMS, hosting, final fonts, and final high-fidelity design remain unresolved.
- Honest fallbacks are defined for every unresolved item.
- The website targets WCAG 2.2 Level AA but must not claim conformance before testing.

## What “complete” means here

This handoff is complete as an implementation input. It is not a deployed website and does not pretend that unresolved external services or launch facts exist. The Codex prompt requires a production build to implement all routes and states, run the documented checks, preserve spoiler boundaries, and report remaining launch blockers accurately.

## Integrity

Use `08_MANIFESTS/SHA256SUMS.txt` to verify files and `08_MANIFESTS/FILE_MANIFEST.json` for the machine-readable inventory. The ZIP is tested after those files are generated.

