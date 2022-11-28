import { useContext, useState } from "react";
import Dice from "./components/Dice";
import KnucklebonesPage from "./pages/KnucklebonesPage";
import { KnucklebonesContext } from "./context/knucklebones";
import Header from "./components/Header";

function App() {
  const {
    gameStatus,
    turn,
    diceNumber,
    diceStatus,
    changeTurn,
    changeDiceStatus,
    changeGameStatus,
  } = useContext(KnucklebonesContext);

  const [gameStarted, setGameStarted] = useState(false);

  let content = (
    <div className="flex justify-center flex-col ml-2 mr-2">
      <div className="m-auto text-2xl mt-5 mb-5">Rules</div>
      <li className="m-auto">Knucklebones is 2 person turn game. You can play this only on 1 device</li>
      <li className="m-auto">Players take turns rolling a single six-sided die and placing it on their side of the board</li>
      <li className="m-auto">Each player has their own 3x3 grid, and their score is the total of all the dice currently placed there.</li>
      <li className="m-auto">When one player has filled all nine slots on their board, the game ends and the player with the highest score wins</li>
      <button className="border pl-10 pr-10 m-auto p-5 hover:bg-gray-400 rounded mt-5" onClick={() => {setGameStarted(!gameStarted)}}>Play!</button>
    </div>
  );
  if (gameStarted) {
    content = (
      <div className="grid gap-7">
        {gameStatus ? <div></div> : <div>KONIEC</div>}
        <KnucklebonesPage
          turn={turn}
          changeTurn={changeTurn}
          diceNumber={diceNumber}
          diceStatus={diceStatus}
          changeDiceStatus={changeDiceStatus}
          changeGameStatus={changeGameStatus}
          gameStatus={gameStatus}
        />
        <Dice />
      </div>
    );
  }

  return (
    <div>
      <Header />
      {content}
    </div>
  );
}

export default App;
