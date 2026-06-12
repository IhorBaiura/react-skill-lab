export const AnswerState = {
  UNANSWERED: "unanswered",
  SELECTED: "answered",
  CORRECT: "correct",
  WRONG: "wrong",
} as const

export type AnswerStateType = (typeof AnswerState)[keyof typeof AnswerState]
