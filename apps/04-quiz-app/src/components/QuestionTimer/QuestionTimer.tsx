import { useEffect, useState } from "react"
import type { AnswerStateType } from "../../enums/answer_state"

interface QuestionTimerPropa {
  timeout: number
  onTimeout: () => void
  mode: AnswerStateType
}

export default function QuestionTimer({
  timeout,
  onTimeout,
  mode,
}: QuestionTimerPropa) {
  const [remainingTime, setRemainingTimeTime] = useState<number>(timeout)

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout)

    return () => {
      clearTimeout(timer)
    }
  }, [timeout, onTimeout])

  useEffect(() => {
    const timer = setInterval(
      () => setRemainingTimeTime((prevTime) => prevTime - 50),
      50
    )

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={mode}
    />
  )
}
