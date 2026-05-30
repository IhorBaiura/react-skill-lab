import { useCallback, useState } from "react"
import QUESTIONS from "../../questions"
import completedImg from "../../assets/quiz-complete.png"
import Question from "../Question/Question"

export default function Quiz() {
  const [userAnswers, setUserAnswer] = useState<(string | null)[]>([])

  const currentQuestionIdx = userAnswers.length
  const quizIsComplete = currentQuestionIdx == QUESTIONS.length

  const handleSelectedAnswer = useCallback((answer: string | null) => {
    setUserAnswer((prevState) => [...prevState, answer])
  }, [])

  const handleOnTimeout = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  )

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={completedImg} alt="Completed image" />
        <h2>Quiz completed</h2>
      </div>
    )
  }

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIdx}
        id={currentQuestionIdx}
        onSkipAnswer={handleOnTimeout}
        onSelectAnswer={handleSelectedAnswer}
      />
    </div>
  )
}
