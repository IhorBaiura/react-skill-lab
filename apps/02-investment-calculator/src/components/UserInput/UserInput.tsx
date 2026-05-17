import { useState } from "react"

const INITIAL_STATE = {
  initialInvestments: 10000,
  annualInvestments: 2500,
  expectedReturn: 7,
  duration: 10,
}

export default function UserInput() {
  const [investmentState, setInvestmentState] = useState(INITIAL_STATE)

  const handleCahnge = (fieldName: string, value: number) =>
    setInvestmentState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }))

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investments</label>
          <input
            type="number"
            value={investmentState.initialInvestments}
            onChange={(e) =>
              handleCahnge("initialInvestments", Number(e.target.value))
            }
            required
          />
        </p>
        <p>
          <label>Annual Investments</label>
          <input
            type="number"
            value={investmentState.annualInvestments}
            onChange={(e) =>
              handleCahnge("annualInvestments", Number(e.target.value))
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={investmentState.expectedReturn}
            onChange={(e) =>
              handleCahnge("expectedReturn", Number(e.target.value))
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={investmentState.duration}
            onChange={(e) => handleCahnge("duration", Number(e.target.value))}
            required
          />
        </p>
      </div>
    </section>
  )
}
