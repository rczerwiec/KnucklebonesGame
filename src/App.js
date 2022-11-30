import { useContext } from "react";
import Dice from "./components/Dice";
import KnucklebonesPage from "./pages/KnucklebonesPage";
import { KnucklebonesContext } from "./context/knucklebones";
import Header from "./components/Header";
import Rules from "./components/Rules";

function App() {
  const {
    gameEnded,
    score,
    gameStarted
  } = useContext(KnucklebonesContext);

  let content = (
    <Rules/>
  );

  if (gameStarted) {
    content = (
      <div className="grid gap-7">
        {gameEnded || <div className="m-auto text-2xl">{score.winnerScore}-{score.loserScore}</div>}
        <KnucklebonesPage/>
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
