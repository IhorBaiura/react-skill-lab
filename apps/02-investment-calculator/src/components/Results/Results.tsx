import { calculateInvestmentResults, formatter } from "../../util/investment"
import type { CalculatorState } from "../../App"

interface ResultsProps {
  state: CalculatorState
}

export default function Results({ state }: ResultsProps) {
  const results = calculateInvestmentResults(state)
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((row) => {
          const totalInterest =
            row.valueEndOfYear -
            row.annualInvestment * row.year -
            initialInvestment

          const totalAmountInvested = row.valueEndOfYear - totalInterest

          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
