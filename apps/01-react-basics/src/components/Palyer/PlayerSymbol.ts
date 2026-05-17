export const PlayerSymbol = {
  X: "X",
  O: "O",
} as const

export type PlayerSymbol = (typeof PlayerSymbol)[keyof typeof PlayerSymbol]
