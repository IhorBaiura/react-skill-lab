import { useEffect, useState } from "react"

interface QuestionTimerPropa {
  timeout: number
  onTimeout: () => void
}

export default function QuestionTimer({
  timeout,
  onTimeout,
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

  return <progress id="question-time" value={remainingTime} max={timeout} />
}
