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

const PLAYERS = {
  [PlayerSymbol.O]: "Player 1",
  [PlayerSymbol.X]: "Player 2",
}

const INITIAL_GAME_BOARDS: GameBoardType = [
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

function deriveWinner(gameBoard: GameBoardType, players): Player | null {
  let winner = null

  for (const combination of winning_combinations) {
    const items = new Set<Player | null>()
    for (const { row, col } of combination) {
      items.add(gameBoard[row][col])
    }

    if (items.size == 1 && !items.has(null)) {
      winner = players[[...items][0]]
    }
  }

  return winner
}

function deriveGameBoard(gameTurns: GameTurns[]): GameBoardType {
  const gameBoard = [...INITIAL_GAME_BOARDS.map((row) => [...row])]

  for (const {
    square: { row, col },
    player,
  } of gameTurns) {
    gameBoard[row][col] = player
  }

  return gameBoard
}

function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState<GameTurns[]>([])

  const activePlayer = deriveActivePlayer(gameTurns)

  const gameBoard = deriveGameBoard(gameTurns)

  const winner = deriveWinner(gameBoard, players)

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

  const handlePlayerNameChange = (palyer: Player, newName: string) => {
    setPlayers((prevState) => ({
      ...prevState,
      [palyer]: newName,
    }))
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players[PlayerSymbol.O]}
            symbol={PlayerSymbol.O}
            isActive={activePlayer == PlayerSymbol.O}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={players[PlayerSymbol.X]}
            symbol={PlayerSymbol.X}
            isActive={activePlayer == PlayerSymbol.X}
            onChangeName={handlePlayerNameChange}
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
