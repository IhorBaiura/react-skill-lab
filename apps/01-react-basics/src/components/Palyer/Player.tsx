import { PlayerSymbol } from "./PlayerSymbol"
import { useState } from "react"

export interface PlayerProps {
  initialName: string
  symbol: PlayerSymbol
  isActive: boolean
}

export default function Player({ initialName, symbol, isActive }: PlayerProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [nameVal, setNameVal] = useState(initialName)

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={nameVal}
            onChange={(e) => setNameVal(e.target.value)}
          />
        ) : (
          <span className="player-name">{nameVal}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((prev) => !prev)}>
        {!isEditing ? "Edit" : "Save"}
      </button>
    </li>
  )
}
