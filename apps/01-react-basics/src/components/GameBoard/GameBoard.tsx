import { useState } from 'react'
import { PlayerSymbol } from "../Palyer/PlayerSymbol"

const initialGameBoard: (PlayerSymbol | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    const updateGameBoard = (row: number, col: number, symbol: PlayerSymbol) => {
        setGameBoard(prevGameBoard => {
            const newGameBoard = [...prevGameBoard.map(arr => [...arr])]
            newGameBoard[row][col] = symbol
            return newGameBoard
        })
    }

  return (
    <ol id="game-board">
      {gameBoard.map((row: (PlayerSymbol | null)[], rowIdx: number) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol: PlayerSymbol | null, colIdx: number) => (
              <li key={colIdx}>
                <button onClick={() => updateGameBoard(rowIdx, colIdx, 'X')}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
