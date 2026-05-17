import { useState } from "react"
import Header from "./components/Header/Header"
import UserInput from "./components/UserInput/UserInput"
import Results from "./components/Results/Results"

export interface CalculatorState {
  initialInvestment: number
  annualInvestment: number
  expectedReturn: number
  duration: number
}

const INITIAL_STATE: CalculatorState = {
  initialInvestment: 10000,
  annualInvestment: 2500,
  expectedReturn: 7,
  duration: 10,
}

function App() {
  const [investmentState, setInvestmentState] = useState(INITIAL_STATE)

  const isValid = investmentState.duration > 0

  const handleCahnge = (fieldName: string, value: number) =>
    setInvestmentState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }))

  return (
    <>
      <Header />
      <UserInput state={investmentState} onChange={handleCahnge} />
      {!isValid && <p className="center">Enter the correct value of the duration</p>}
      {isValid && <Results state={investmentState} />}
    </>
  )
}

export default App
