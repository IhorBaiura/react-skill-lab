# react-skill-lab

A personal React playground for sharpening React skills, experimenting with new features, and building freestyle UI components.

## Purpose

This repository is created as a practical space to explore React in a hands-on way.  
The main goal is to improve React experience through small experiments, UI components, patterns, and feature testing.

## What This Repository Is For

- Practicing modern React concepts
- Testing new React features
- Building freestyle UI components
- Exploring component composition patterns
- Experimenting with hooks and state management
- Improving frontend architecture skills
- Trying different styling approaches
- Keeping reusable examples for future reference

## Possible Experiment Areas

- React components
- Custom hooks
- Forms
- State management
- Context API
- React Router
- Performance optimization
- Suspense and lazy loading
- Error boundaries
- UI animations
- Component architecture
- Design systems
- Accessibility
- Testing React components

## Creating a new app in `apps/`

Apps live under `apps/*` and are picked up automatically by the pnpm workspace ([`pnpm-workspace.yaml`](pnpm-workspace.yaml)).

### 1. Scaffold with Vite

From the repository root:

```bash
pnpm create vite@latest apps/02-my-app -- --template react-ts
```

Use a numbered folder name (for example `02-hooks`, `03-router`) so apps stay easy to find and order.

### 2. Install dependencies

Link the new package into the monorepo:

```bash
pnpm install
```

### 3. Run the app

Start only the new app:

```bash
pnpm --filter 02-my-app dev
```

Or start every app under `apps/`:

```bash
pnpm dev
```

### 4. Optional setup

Match the existing app setup if you want the same tooling:

- Copy [`apps/01-react-basics/eslint.config.js`](apps/01-react-basics/eslint.config.js) into the new app and add the same ESLint devDependencies.
- Root [`.prettierrc`](.prettierrc) and [`.vscode/settings.json`](.vscode/settings.json) already apply workspace-wide formatting.

Add a short `README.md` inside the new app folder describing what that exercise covers.

## Monorepo scripts

From the repository root:

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `pnpm dev`         | Run `dev` in all apps (parallel)     |
| `pnpm build`       | Build all workspace packages         |
| `pnpm lint`        | Lint all workspace packages          |
| `pnpm format`      | Format the repo with Prettier        |
| `pnpm format:check`| Check formatting                     |

## Tech Stack

The repository may include experiments with:

- React
- TypeScript
- Vite
- CSS / SCSS / CSS Modules
- Tailwind CSS
- React Router
- Testing tools
- Other React ecosystem libraries
