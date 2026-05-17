import { PlayerSymbol } from "../Palyer/PlayerSymbol"
import type { GameBoardType } from "../../App"

interface GameBoardProps {
  onSelectItem: (rowIdx: number, colIdx: number) => void
  board: GameBoardType
}

export default function GameBoard({ onSelectItem, board }: GameBoardProps) {
  return (
    <ol id="game-board">
      {board.map((row: (PlayerSymbol | null)[], rowIdx: number) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol: PlayerSymbol | null, colIdx: number) => (
              <li key={colIdx}>
                <button
                  onClick={() => onSelectItem(rowIdx, colIdx)}
                  disabled={playerSymbol ? true : false}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
