export const AnswerState = {
  UNANSWERED: "unanswered",
  SELECTED: "selected",
  CORRECT: "correct",
  WRONG: "wrong",
} as const

export type AnswerStateType = (typeof AnswerState)[keyof typeof AnswerState]
