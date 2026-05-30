import type { AnswerStateType } from "../../enums/answer_state"
import type { Questions } from "../../questions"
import Answers from "../Answers/Answers"
import QuestionTimer from "../QuestionTimer/QuestionTimer"

interface QuestionProps {
  questionText: Questions["text"]
  answers: Questions["answers"]
  onSelectAnswer: (answer: string) => void
  selectedAnswer: string
  answerState: AnswerStateType
  onSkipAnswer: () => void
}

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}: QuestionProps) {
  return (
    <div id="question">
      <QuestionTimer timeout={5000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  )
}
