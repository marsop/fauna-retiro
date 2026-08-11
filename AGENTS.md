# Agents Guidelines

This document contains specific guidelines and constraints for automated agents working in this repository.

## Workflow and Planning
* **Deep Planning Mode**: Before making any changes, you must enter a 'deep planning mode' to fully understand requirements. Ask questions to confirm assumptions using `request_user_input` and `message_user` until you have zero doubt. Only use `set_plan` once you are absolutely certain. After the plan is approved, execute autonomously without asking further questions unless absolutely necessary.
* **Pre-commit Verification Phrasing**: When drafting execution plans, the pre-commit verification step must strictly use this exact phrasing: 'Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.'
* **Versioning**: Always update the minor version in `package.json` with every single change done in the app (unless instructed to update the major version).
* **Changelog**: The project maintains a `CHANGELOG.md` following the 'Keep a Changelog' format and adheres to semantic versioning. Ensure it is updated appropriately.
* **Default Branch**: The repository's default/primary branch is `master`, not `main`. All configurations, including GitHub Actions workflow triggers, should target `master`.

## Stack & Architecture
* **Frontend Setup**: The frontend is a Vite + React (TypeScript) SPA using TanStack Router (configured with Hash Routing for GitHub Pages compatibility) and TanStack Query.
* **State Management**: State management is implemented using Zustand with `localStorage` persistence. It acts as a local-first setup that is structurally prepared for a future transition to Supabase. The presentation order in the quest is randomized per user and persisted in the Zustand store (`animalSequence`).
* **Styling**: The project uses Tailwind CSS v3 along with shadcn/ui.
* **Component Library**: Shadcn/UI components added to this project might use `@base-ui/react` primitives instead of the traditional Radix UI. Be cautious with Radix-specific props like `asChild` which may not exist on these base-ui primitives.
* **Routing**: TanStack Router route generation is not configured to run automatically via a Vite plugin. When adding or removing routes, manually generate the route tree using the CLI command: `npx @tanstack/router-cli generate --route-dir src/routes --generated-route-tree src/routeTree.gen.ts`.
* **Dark Mode**: Dark mode is managed using Tailwind's 'class' strategy (`darkMode: ["class"]`) and a custom React Context (`ThemeProvider`) that persists the user's selected theme (light, dark, or system) to `localStorage`.
* **Deployment**: The project uses a GitHub Actions workflow (`.github/workflows/deploy.yml`) to build and deploy the Vite app to GitHub Pages.

## Data & Assets
* **Mock Data**: The application's core entity data (e.g., items/animals, facts, media URLs) is statically defined in `src/lib/mockData.ts`.
* **Media Assets**: Images, videos, and SVG flags are currently stored locally in the repository (e.g., `/public/images/`, `/public/videos/`, `/public/flags/`) rather than using an external storage bucket.
* **Asset URLs**: Asset URLs (images/videos/flags) must be formatted using the `formatAssetUrl` helper function in `src/lib/utils.ts` to ensure correct path resolution with Vite's base path for GitHub Pages subpath deployments.

## Internationalization (i18n)
* **Implementation**: Implemented using `react-i18next` and `i18next-browser-languagedetector`, defaulting to German ('de'). Language preference is persisted in `localStorage` and can be set via URL query parameters (e.g., `?lng=en`) handled by a custom hash-aware detector.
* **Translations**: Translation files (`en.json`, `de.json`, `es.json`, `gl.json`, `vbg.json`) are in `src/locales/` and configured in `src/i18n.ts`.
* **Adding New Text**: ALWAYS update the translations and use translation keys instead of hardcoded strings when adding new UI texts, dynamic content, or languages to the application.

## Testing & Verification
* **Frontend Verification**: UI verification is done using Playwright scripts (Node or Python). Setup requires starting a local dev server (`npm run dev &`). For visual changes, follow the `frontend_verification_instructions` workflow to capture screenshots and videos (saved to `/home/jules/verification/`) and submit them via the `frontend_verification_complete` tool.
* **Playwright Clean State**: When writing Playwright UI verification scripts, explicitly clear localStorage (e.g., `page.evaluate("window.localStorage.clear()")`) before navigating to test pages to ensure a clean state, as Zustand persists application state in the browser.
* **Scripts**: The `package.json` does not currently define a test script, so commands like `npm test` or `npm run test` will fail.
* **Linting**: The default `npm run lint` script using ESLint is currently broken due to a missing configuration file, although an `.oxlintrc.json` configuration is present in the repository.

## Compilation & Build
* **Building**: To compile and build the Vite project, run `npm run build`. Direct usage of `tsc` is not supported globally.
* **Typing Intervals**: In TypeScript files, avoid using `NodeJS.Timeout` for typing interval IDs as `@types/node` is not globally available in this browser-focused setup; use `ReturnType<typeof setInterval>` instead to prevent build errors.
