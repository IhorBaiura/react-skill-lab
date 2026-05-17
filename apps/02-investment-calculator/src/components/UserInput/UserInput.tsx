import type { CalculatorState } from "../../App"

interface UserInputProps {
  state: CalculatorState
  onChange: (fieldName: string, value: number) => void
}

export default function UserInput({ state, onChange }: UserInputProps) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investments</label>
          <input
            type="number"
            value={state.initialInvestment}
            onChange={(e) =>
              onChange("initialInvestment", Number(e.target.value))
            }
            required
          />
        </p>
        <p>
          <label>Annual Investments</label>
          <input
            type="number"
            value={state.annualInvestment}
            onChange={(e) =>
              onChange("annualInvestment", Number(e.target.value))
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
            value={state.expectedReturn}
            onChange={(e) => onChange("expectedReturn", Number(e.target.value))}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={state.duration}
            onChange={(e) => onChange("duration", Number(e.target.value))}
            required
          />
        </p>
      </div>
    </section>
  )
}
