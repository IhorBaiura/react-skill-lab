import { PlayerSymbol } from "./components/Palyer/PlayerSymbol"
import GameBoard from "./components/GameBoard/GameBoard"
import Player from "./components/Palyer/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol={PlayerSymbol.O} />
          <Player initialName="Player 2" symbol={PlayerSymbol.X} />
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
