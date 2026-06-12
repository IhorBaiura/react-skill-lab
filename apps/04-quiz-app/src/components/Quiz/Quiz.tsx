import { useCallback, useState } from "react"
import QUESTIONS from "../../questions"

import Question from "../Question/Question"
import Summary from "../Summary/Summary"

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
    return <Summary userAnswers={userAnswers} />
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
