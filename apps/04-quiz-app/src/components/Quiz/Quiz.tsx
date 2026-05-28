import { useState } from "react"
import QUESTIONS from "../../questions"
import type { Questions } from "../../questions"

export default function Quiz() {
  const [userAnswers, setUserAnswer] = useState<Questions["answers"]>([])

  const currentQuestionIdx = userAnswers.length

  function handleSelectedAnswer(answer: string) {
    setUserAnswer((prevState) => [...prevState, answer])
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[currentQuestionIdx].text}</h2>
        <ul id="answers">
          {QUESTIONS[currentQuestionIdx].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
