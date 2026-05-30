import { useRef } from "react"
import type { Questions } from "../../questions"
import { AnswerState, type AnswerStateType } from "../../enums/answer_state"

interface AnswersProps {
  answers: Questions["answers"]
  selectedAnswer: string
  answerState: AnswerStateType
  onSelect: (answer: string) => void
}

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}: AnswersProps) {
  const shuffledAnswers = useRef<AnswersProps['answers']>(null)

  if (shuffledAnswers.current === null) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5)
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer
        let cssClss = ""

        if (
          (answerState == AnswerState.SELECTED ||
            answerState == AnswerState.CORRECT ||
            answerState == AnswerState.WRONG) &&
          isSelected
        ) {
          cssClss = answerState
        }

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClss}>
              {answer}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
