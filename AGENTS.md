# Project workflow

## Local verification before publishing

- Treat GitHub push and Hostinger publication as one gated action.
- After making changes, run the relevant local checks first. For this Astro site, the default checks are:
  - `ASTRO_TELEMETRY_DISABLED=1 npm run check`
  - `ASTRO_TELEMETRY_DISABLED=1 npm run build`
- Report the local check results and stop before `git push`.
- Push to GitHub only after James explicitly confirms that local testing is complete and authorizes publishing. Phrases such as “tests are complete,” “go ahead and publish,” or “push it live” count as confirmation.
- Do not infer confirmation from a request to edit, build, commit, or run local tests.
- Once confirmed, commit the intended changes, push the selected branch to GitHub, and verify the Hostinger deployment result.
- Never push or publish a failing, unverified, or unrelated change.

## Deployment details

- Repository: `git@github.com:jschmittler/replay-every-memory.git`
- Branch: `main`
- Hostinger publishes the repository's `dist/` directory to `public_html/dist`.
