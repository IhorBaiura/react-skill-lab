# 01-react-basics

A tic-tac-toe game built with React and TypeScript. It is the first exercise in the [react-skill-lab](../../) monorepo, focused on core React patterns rather than routing or external state libraries.

## What it does

- Two players take turns on a 3×3 board (X and O).
- Player names can be edited inline.
- The active player is highlighted.
- Wins and draws are detected; you can start a rematch.
- A move log lists each turn in order.

## Concepts practiced

- **Components & props** — `Player`, `GameBoard`, `Log`, `GameOver`
- **`useState`** — players, turn history, editing mode
- **Derived state** — board, active player, and winner computed from `gameTurns` instead of stored separately
- **Lifting state up** — game logic lives in `App.tsx`; children receive data and callbacks
- **TypeScript** — shared types (`GameTurns`, `Player`), `const` objects instead of enums (`PlayerSymbol`), `erasableSyntaxOnly`-friendly syntax

## Project structure

```
src/
├── App.tsx                 # Game state, win/draw logic, handlers
├── winning_combinations.ts # Winning line definitions
├── components/
│   ├── Palyer/             # Player list item (name edit, active highlight)
│   ├── GameBoard/          # Board rendering and cell clicks
│   ├── Log/                # Turn history
│   └── GameOver/           # Win/draw overlay and rematch
└── index.tsx               # App entry point
```

## Scripts

From this directory:

| Command         | Description              |
| --------------- | ------------------------ |
| `pnpm dev`      | Start Vite dev server    |
| `pnpm build`    | Type-check and build     |
| `pnpm lint`     | Run ESLint               |
| `pnpm preview`  | Preview production build |

From the monorepo root:

```bash
pnpm --filter 01-react-basics dev
```

## Stack

- React 19
- TypeScript
- Vite
