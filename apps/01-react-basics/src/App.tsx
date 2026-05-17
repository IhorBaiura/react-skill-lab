import { useState } from "react"
import { PlayerSymbol } from "./components/Palyer/PlayerSymbol"
import GameBoard from "./components/GameBoard/GameBoard"
import Player from "./components/Palyer/Player"
import Log from "./components/Log/Log"

type Player = (typeof PlayerSymbol)[keyof typeof PlayerSymbol]
export interface GameTurns {
  square: {
    row: number
    col: number
  }
  player: Player
}

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
        <GameBoard onSelectItem={cahngePlayer} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
