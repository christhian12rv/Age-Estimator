# Age Estimator

## Overview

**Age Estimator** is a modern web application that estimates the average age of a person based on their name. The app features a clean, responsive UI, dark mode toggle, and real-time feedback as you type. It is built with SvelteKit and TypeScript, and is designed for fast, interactive user experience.

## Supported Versions

- **Node.js:** >= 18.x
- **npm:** Use [pnpm](https://pnpm.io/) >= 8.x

## Project Structure

```
age-estimator/
├── src/
│   ├── app.d.ts
│   ├── app.html
│   ├── lib/
│   │   ├── assets/         # SVG and icon components
│   │   └── utils/          # Utility functions (e.g., debounce)
│   ├── routes/             # SvelteKit routes
│   │   ├── +layout.svelte  # Main layout with dark mode
│   │   ├── +page.svelte    # Main page UI
│   │   └── +page.ts        # Data loading logic
├── static/                 # Static assets (e.g., favicon)
├── package.json
├── pnpm-lock.yaml
├── svelte.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run the development server

```bash
pnpm dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

## Building for Production

To build the project for production:

```bash
pnpm build
```

The output will be in the `.svelte-kit` and `build` directories, ready for deployment.

## Running Lints

To check code quality and formatting:

```bash
pnpm lint
```

This will run all configured linters (ESLint, etc.) on the project.

## Deployment

This project is deployed on Vercel:

**Live URL:** [https://age-estimator.vercel.app/](https://age-estimator.vercel.app/)

## Useful Links

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [pnpm Documentation](https://pnpm.io/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

For any questions or contributions, please open an issue or pull request.
