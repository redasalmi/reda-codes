# Reda Codes

The third version of my personal portfolio, built to showcase my experience, selected work, and approach to frontend engineering.

[redacodes.com](https://redacodes.com)

## Built With

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## Features

- Responsive, accessible interface
- Light and dark themes
- Animated hero checklist with reduced-motion support
- Project content managed with Astro content collections
- SEO metadata, structured data, and sitemap generation
- Locally optimized fonts through Astro's Fonts API

## Development

### Requirements

- Node.js 22.12 or newer
- npm

Install the dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

The site will be available at [localhost:4321](http://localhost:4321).

## Commands

| Command                   | Action                               |
| ------------------------- | ------------------------------------ |
| `npm run dev`             | Start the local development server   |
| `npm run build`           | Build the production site to `dist/` |
| `npm run check`           | Run Astro and TypeScript checks      |
| `npm run format:check`    | Check formatting with Prettier       |
| `npm run validate`        | Run all project validation           |
| `npm run preview`         | Preview the production build locally |
| `npm run astro -- --help` | Display the Astro CLI help           |

## Deployment

The site is configured as a static Astro project and can be deployed to Cloudflare Pages with these build settings:

| Setting                | Value              |
| ---------------------- | ------------------ |
| Production branch      | `main`             |
| Build command          | `npm run build`    |
| Build output directory | `dist`             |
| Node.js version        | `22.12.0` or newer |

Connect the GitHub repository to Cloudflare Pages to enable automatic production and preview deployments.

## License

Licensed under the [MIT License](LICENSE).
