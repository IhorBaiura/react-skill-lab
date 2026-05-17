import { useState } from "react"
import { PlayerSymbol } from "./components/Palyer/PlayerSymbol"
import GameBoard from "./components/GameBoard/GameBoard"
import Player from "./components/Palyer/Player"
import Log from "./components/Log/Log"
import GameOver from "./components/GameOver/GameOver"
import winning_combinations from "./winning_combinations"

export type Player = (typeof PlayerSymbol)[keyof typeof PlayerSymbol]
export interface GameTurns {
  square: {
    row: number
    col: number
  }
  player: Player
}

export type GameBoardType = (PlayerSymbol | null)[][]

const initialGameBoard: GameBoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns: GameTurns[]): Player {
  let player: Player = PlayerSymbol.O

  if (gameTurns.length > 0) {
    player =
      gameTurns[0].player == PlayerSymbol.O ? PlayerSymbol.X : PlayerSymbol.O
  }

  return player
}

function App() {
  const [gameTurns, setGameTurns] = useState<GameTurns[]>([])

  const activePlayer = deriveActivePlayer(gameTurns)

  const gameBoard = [...initialGameBoard.map((row) => [...row])]

  for (const {
    square: { row, col },
    player,
  } of gameTurns) {
    gameBoard[row][col] = player
  }

  let winner = null

  for (const combination of winning_combinations) {
    const items = new Set()
    for (const { row, col } of combination) {
      items.add(gameBoard[row][col])
    }

    if (items.size == 1 && !items.has(null)) {
      winner = [...items][0]
    }
  }

  const hasDraw = gameTurns.length == 9 && !winner

  const cahngePlayer = (rowIdx: number, colIdx: number) => {
    setGameTurns((prevTurnState) => [
      {
        square: {
          row: rowIdx,
          col: colIdx,
        },
        player: deriveActivePlayer(prevTurnState),
      },
      ...prevTurnState,
    ])
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol={PlayerSymbol.O}
            isActive={activePlayer == PlayerSymbol.O}
          />
          <Player
            initialName="Player 2"
            symbol={PlayerSymbol.X}
            isActive={activePlayer == PlayerSymbol.X}
          />
        </ol>
        <GameBoard onSelectItem={cahngePlayer} board={gameBoard} />
      </div>
      {(winner || hasDraw) && (
        <GameOver winner={winner} onRematch={() => setGameTurns([])} />
      )}
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
