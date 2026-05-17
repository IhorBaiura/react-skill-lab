import { PlayerSymbol } from "./PlayerSymbol"
import { useState } from "react"
import type { Player } from "../../App"

export interface PlayerProps {
  initialName: string
  symbol: PlayerSymbol
  isActive: boolean
  onChangeName: (palyer: Player, newName: string) => void
}

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}: PlayerProps) {
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
      <button
        onClick={() => {
          setIsEditing((prev) => {
            if (prev) onChangeName(symbol, nameVal)
            return !prev
          })
        }}
      >
        {!isEditing ? "Edit" : "Save"}
      </button>
    </li>
  )
}
