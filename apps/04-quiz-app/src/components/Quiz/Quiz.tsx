import { useCallback, useRef, useState } from "react"
import QUESTIONS from "../../questions"
import completedImg from "../../assets/quiz-complete.png"
import QuestionTimer from "../QuestionTimer/QuestionTimer"

enum AnswerState {
  UNANSWERED = "unanswered",
  SELECTED = "selected",
  CORRECT = "correct",
  WRONG = "wrong",
}

export default function Quiz() {
  const shuffledAnswers = useRef<string[]>(null)
  const [answerState, setAnswerState] = useState<AnswerState>(
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

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...QUESTIONS[currentQuestionIdx].answers]
    shuffledAnswers.current.sort(() => Math.random() - 0.5)
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={currentQuestionIdx}
          timeout={5000}
          onTimeout={handleOnTimeout}
        />
        <h2>{QUESTIONS[currentQuestionIdx].text}</h2>
        <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer
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
                <button
                  onClick={() => handleSelectedAnswer(answer)}
                  className={cssClss}
                >
                  {answer}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
