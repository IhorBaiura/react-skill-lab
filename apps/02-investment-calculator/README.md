# 02-investment-calculator

An investment growth calculator built with React and TypeScript. It is the second exercise in the [react-skill-lab](../../) monorepo, focused on forms, lifted state, and presenting computed data.

## What it does

Enter four values and see a year-by-year breakdown:

- **Initial investment** — starting amount
- **Annual investment** — added each year
- **Expected return** — annual growth rate (%)
- **Duration** — number of years

The results table shows investment value, yearly interest, total interest, and invested capital. Results are hidden until duration is greater than zero.

## Concepts practiced

- **Controlled inputs** — form fields driven by React state in `UserInput`
- **Lifting state up** — `CalculatorState` and `onChange` live in `App.tsx`
- **Conditional rendering** — validation message vs. results table
- **Pure utilities** — `calculateInvestmentResults` and `Intl` currency formatting in `util/investment.ts`
- **TypeScript** — shared `CalculatorState` interface passed as props
- **React Compiler** — enabled via `babel-plugin-react-compiler` in this Vite app

## Project structure

```
src/
├── App.tsx                      # State, validation, change handler
├── util/
│   └── investment.ts            # Projection logic and currency formatter
├── components/
│   ├── Header/                  # App title and logo
│   ├── UserInput/               # Controlled number inputs
│   └── Results/                 # Year-by-year results table
└── index.tsx                    # App entry point
```

## Scripts

From this directory:

| Command        | Description              |
| -------------- | ------------------------ |
| `pnpm dev`     | Start Vite dev server    |
| `pnpm build`   | Type-check and build     |
| `pnpm lint`    | Run ESLint               |
| `pnpm preview` | Preview production build |

From the monorepo root:

```bash
pnpm --filter 02-investment-calculator dev
```

## Stack

- React 19
- TypeScript
- Vite (with React Compiler)
