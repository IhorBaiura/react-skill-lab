import type { GameTurns } from "../../App"

export interface LogProps {
  turns: GameTurns[]
}

export default function Log({ turns }: LogProps) {
  return (
    <ol id="log">
      {turns.map((turn, idx) => (
        <li key={idx}>
          {turn.player} selected ({turn.square.row},{turn.square.col})
        </li>
      ))}
    </ol>
  )
}
