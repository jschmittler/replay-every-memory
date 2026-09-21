# Configuration contract

Suggested typed configuration keys. Adapt names to the target stack while preserving optionality and fallbacks.

```ts
type SiteConfig = {
  siteUrl?: string;
  publicEmail: "trashy@replayeverymemory.com";
  publicHandle: "@replayeverymemory";
  followUrl?: string; // fallback: /journal
  trailerUrl?: string;
  steamUrl?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  socialUrls?: Partial<Record<"instagram" | "youtube" | "tiktok" | "x" | "bluesky", string>>;
  analytics?: { enabled: boolean; provider?: string; siteId?: string };
  contactForm?: { enabled: boolean; provider?: string; endpoint?: string };
};
```

Rules:

- Optional URL absent: render text or coming-soon state, not a disabled link with `href="#"`.
- `followUrl` absent: route Follow Development to `/journal`.
- Analytics absent/disabled: load no analytics code.
- Contact form absent/disabled: render the `mailto:` fallback.
- `siteUrl` absent: omit canonical/absolute social metadata requiring a production origin.
- Validate configured URLs at build time.
- Never place API secrets in public environment variables.

