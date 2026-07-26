# Content architecture

Use Astro Content Collections for repeated, structured content that may have its own page. Keep small site-wide content in TypeScript configuration instead.

## Content collections

### Projects

**Collection:** `projects`

**Location:** `src/content/projects/`

Use one Markdown or MDX file per project. This supports featured-project cards now and full case-study pages later.

Suggested fields:

- `title`
- `summary`
- `year`
- `role`
- `stack`
- `website`
- `source`
- `featured`
- `order`
- `draft`

The document body can contain the full case study.

### Blog posts

**Collection:** `blog`

**Location:** `src/content/blog/`

Use Markdown by default and MDX only when a post needs an Astro component.

Suggested fields:

- `title`
- `description`
- `publishedAt`
- `updatedAt`
- `tags`
- `draft`

### Templates

**Collection:** `templates`

**Location:** `src/content/templates/`

Add this collection when template sales are introduced. Keep it separate from projects because products need different metadata and filtering.

Suggested fields:

- `title`
- `description`
- `price`
- `stack`
- `demoUrl`
- `purchaseUrl`
- `featured`
- `publishedAt`
- `draft`

## Content that does not need a collection

### Hero and About

Keep concise copy directly in the relevant Astro component. Move it to `src/site.config.ts` only if it is reused in metadata or other pages.

### Experience

Start with a typed array in `src/data/experience.ts`. A collection is unnecessary while experience entries only appear in one timeline.

Promote experience to a collection if entries later need dedicated pages, long descriptions, or CMS editing.

### Navigation, social links, and contact details

Store reused values in `src/site.config.ts`, including:

- Name and professional title
- Email
- Location
- GitHub and LinkedIn URLs
- Navigation links

### Footer

Keep presentation in the Footer component and read reused identity or social values from `src/site.config.ts`.

## Proposed structure

```text
src/
├── content/
│   ├── blog/
│   ├── projects/
│   └── templates/       # Add when needed
├── data/
│   └── experience.ts
├── content.config.ts
└── site.config.ts
```

## Rule of thumb

Use a collection when content has multiple entries sharing a schema, needs querying or filtering, or may receive its own route. Otherwise, prefer a component, typed data file, or site configuration.
