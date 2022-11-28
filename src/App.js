import { useContext } from "react";
import Dice from "./components/Dice";
import "./index.css";
import KnucklebonesPage from "./pages/KnucklebonesPage";
import { KnucklebonesContext } from "./context/knucklebones";

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

  return (
    <div>
      {gameStatus ? <div></div> : <div>KONIEC</div>}
      <div className="grid grid-cols-2">
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
    </div>
  );
}

export default App;
