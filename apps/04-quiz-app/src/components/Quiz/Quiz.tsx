import { useCallback, useState } from "react"
import QUESTIONS from "../../questions"
import completedImg from "../../assets/quiz-complete.png"
import { AnswerState, type AnswerStateType } from "../../enums/answer_state"
import Question from "../Question/Question"

export default function Quiz() {
  const [answerState, setAnswerState] = useState<AnswerStateType>(
    AnswerState.UNANSWERED
  )
  const [userAnswers, setUserAnswer] = useState<(string | null)[]>([])

  const currentQuestionIdx =
    answerState == AnswerState.UNANSWERED
      ? userAnswers.length
      : userAnswers.length - 1
  const quizIsComplete = currentQuestionIdx == QUESTIONS.length

  const handleSelectedAnswer = useCallback(
    (answer: string | null) => {
      setAnswerState(AnswerState.SELECTED)
      setUserAnswer((prevState) => [...prevState, answer])

      setTimeout(() => {
        if (answer == QUESTIONS[currentQuestionIdx].answers[0]) {
          setAnswerState(AnswerState.CORRECT)
        } else {
          setAnswerState(AnswerState.WRONG)
        }

        setTimeout(() => setAnswerState(AnswerState.UNANSWERED), 2000)
      }, 1000)
    },
    [currentQuestionIdx]
  )

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
        questionText={QUESTIONS[currentQuestionIdx].text}
        answers={QUESTIONS[currentQuestionIdx].answers}
        onSelectAnswer={handleSelectedAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1] as string}
        answerState={answerState}
        onSkipAnswer={handleOnTimeout}
      />
    </div>
  )
}
