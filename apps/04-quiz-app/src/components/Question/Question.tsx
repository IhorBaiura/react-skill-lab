import { useState } from "react"
import { AnswerState, type AnswerStateType } from "../../enums/answer_state"
import Answers from "../Answers/Answers"
import QuestionTimer from "../QuestionTimer/QuestionTimer"
import QUESTIONS from "../../questions"

interface QuestionProps {
  id: number
  onSelectAnswer: (answer: string) => void
  onSkipAnswer: () => void
}

export type AnswerType = {
  selectedAnswer: string
  isCorrect: boolean | null
}

export default function Question({
  id,
  onSelectAnswer,
  onSkipAnswer,
}: QuestionProps) {
  const [answer, setAnswer] = useState<AnswerType>({
    selectedAnswer: "",
    isCorrect: null,
  })

  let timer = 10000

  if (answer.selectedAnswer) {
    timer = 1000
  }

  if (answer.isCorrect !== null) {
    timer = 2000
  }

  function handleSelectAnswer(answer: string) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[id].answers[0] === answer,
      })

      setTimeout(() => {
        onSelectAnswer(answer)
      }, 2000)
    }, 1000)
  }

  let answerState: AnswerStateType = AnswerState.UNANSWERED

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? AnswerState.CORRECT : AnswerState.WRONG
  } else if (answer.selectedAnswer) {
    answerState = AnswerState.SELECTED
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer !== "" ? onSkipAnswer : () => {}}
        mode={answerState}
      />
      <h2>{QUESTIONS[id].text}</h2>
      <Answers
        answers={QUESTIONS[id].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  )
}
