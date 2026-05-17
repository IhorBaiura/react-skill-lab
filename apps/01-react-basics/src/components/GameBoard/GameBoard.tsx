import { PlayerSymbol } from "../Palyer/PlayerSymbol"
import type { GameTurns } from "../../App"

const initialGameBoard: (PlayerSymbol | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

interface GameBoardProps {
  onSelectItem: (rowIdx: number, colIdx: number) => void
  turns: GameTurns[]
}

export default function GameBoard({ onSelectItem, turns }: GameBoardProps) {
  const gameBoard = [...initialGameBoard.map((row) => [...row])]

  for (const {
    square: { row, col },
    player,
  } of turns) {
    gameBoard[row][col] = player
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row: (PlayerSymbol | null)[], rowIdx: number) => (
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
