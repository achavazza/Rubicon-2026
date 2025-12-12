When to put assets in `public/` vs import from source

- Put large, static media (videos, large images, downloadable files) in `public/assets`.
  - These are served as-is at `/<path>` (e.g. `/assets/videos/intro.mp4`).
  - Good for files referenced by HTML, CMS, or third-party scripts.

- Put images/SVGs in source (import) when you want bundler/Next.js optimizations:
  - Import SVGs as React components (or use an icons folder under `components/`).
  - Use `next/image` for automatic optimization (imported/static files work best).

- Keep lockfiles (`pnpm-lock.yaml`, `package-lock.json`) committed and ignore `node_modules/`.

- Suggested layout (already created):
  - `/public/assets/images/` — static images
  - `/public/assets/videos/` — static videos
  - `/public/assets/icons/` — raw icon files
  - `/public/assets/svgs/` — raw svg files (also consider converting to components)

If you want, I can also create a `components/icons` folder for React SVG components so you can import them directly into components. Also tell me if you'd like me to commit these changes to git.