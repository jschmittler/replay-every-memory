/** Project identity shared by Home and Games. Add future titles here; keep slug URLs stable. */
export const games = [
  {
    slug: 'trash-dash',
    title: 'Trash Dash',
    logo: '/assets/trash-dash-logo.png',
    status: 'In development',
    releaseNote: 'Launching in 2026',
    platforms: 'Planned for Steam, the App Store, and Google Play.',
    format: '2D side-scrolling adventure',
    summary: 'A 2D side-scrolling adventure about Trashy, his best friend Jimothy, and the mysterious Gunk threatening their home. Playful, a little chaotic, and full of heart.',
    charactersHref: '/characters',
    mediaHref: '/media',
  },
] as const;
export const featuredGame = games[0];
