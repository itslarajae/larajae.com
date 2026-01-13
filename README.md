# larajae.com

Personal portfolio site for Lara Jae built with Next.js, TypeScript, Tailwind CSS, and MDX.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Content management

### Projects

Project data lives in `content/projects.ts`.

1. Add a new object to the `projects` array.
2. Include a unique `slug` and update the `cover` and `gallery` image paths.
3. Add any new images to `public/images/projects`.

### Notes (MDX posts)

Writing lives in `content/posts` as MDX with frontmatter.

1. Create a new `.mdx` file in `content/posts`.
2. Add frontmatter fields: `title`, `excerpt`, `cover`, and `category`.
3. Add the cover image to `public/images/notes` and reference the path in `cover`.

## Scripts

```bash
npm run dev       # Start the dev server
npm run build     # Build for production
npm run lint      # Run lint checks
npm run typecheck # Run TypeScript checks
```
