# Component and content inventory

## Shell

- SkipLink
- SiteHeader
- PrimaryNav
- MobileNav
- SiteFooter
- PageContainer
- Breadcrumbs

## Actions and controls

- Button / LinkButton
- TextLink
- MenuButton
- FilterGroup
- Pagination
- MediaControls
- FormField
- SelectField
- TextArea
- ErrorSummary

## Content

- GameHero
- StatusFacts
- EditorialFeature
- CharacterFeature
- WorldProgression
- MediaFrame
- MediaFallback
- JournalEntryPreview
- JournalFilter
- ArticleHeader
- ArticleOutline
- TeamProfile
- Timeline
- BoilerplateBlock
- DownloadPackage
- ContactRoute
- EmptyState
- ErrorState

## Data models

### Site settings

- public studio name
- tagline
- descriptor
- public email
- public handle
- canonical URL (optional)
- primary CTA label/destination
- social destinations (optional)
- footer/legal text

### Game

- title
- slug
- status
- planned launch display
- platforms with optional URLs
- synopsis
- character references
- public worlds
- media with alt text, caption, credit, focal point, approval status
- feature list with source/approval status

### Journal entry

- title
- slug
- summary
- format
- publication status
- publication date (only when real)
- updated date (optional)
- hero media
- sections in the approved editorial sequence
- related game
- previous/next relationship

### Press asset

- title
- description
- status
- file/path or URL
- contents
- formats
- dimensions
- size
- updated date
- credits
- rights/usage guidance

## Component rules

- Components must accept missing optional media and URLs without rendering broken controls.
- Disabled/coming-soon states must not be focusable links.
- Headings are authored by page hierarchy, not selected for visual size.
- Icon-only controls require accessible names and visible focus.
- External links are distinguishable and do not unexpectedly open a new tab unless that behavior is disclosed.
- Errors are associated with fields and summarized when submission fails.
- All interactive states include hover where available, keyboard focus, active, disabled, loading, success, and failure as relevant.

