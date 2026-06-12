import completedImg from "../../assets/quiz-complete.png"
import QUESTIONS from "../../questions"

interface SummaryProps {
  userAnswers: (string | null)[]
}

export default function Summary({ userAnswers }: SummaryProps) {
  const correctAnswers = userAnswers.filter(
    (answer, idx) => answer === QUESTIONS[idx].answers[0]
  ).length
  const skippedAnswers = userAnswers.filter((answer) => answer === null).length
  const incorrectAnswers = userAnswers.length - correctAnswers - skippedAnswers

  const correctPercentage = Math.round(
    (correctAnswers / userAnswers.length) * 100
  )
  const skippedPercentage = Math.round(
    (skippedAnswers / userAnswers.length) * 100
  )
  const incorrectPercentage = Math.round(
    (incorrectAnswers / userAnswers.length) * 100
  )

  return (
    <div id="summary">
      <img src={completedImg} alt="Completed image" />
      <h2>Quiz completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrectPercentage}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, idx) => {
          let cssClass = "user-answer"

          if (answer === null) {
            cssClass += " skipped"
          }
          if (answer === QUESTIONS[idx].answers[0]) {
            cssClass += " correct"
          }
          if (answer !== QUESTIONS[idx].answers[0]) {
            cssClass += " wrong"
          }

          return (
            <li key={answer}>
              <h3>{idx + 1}</h3>
              <p className="question">{QUESTIONS[idx].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
