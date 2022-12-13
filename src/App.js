import { useContext } from "react";
import { KnucklebonesContext } from "./context/knucklebones";

import Dice from "./components/Dice";
import KnucklebonesPage from "./pages/KnucklebonesPage";
import Header from "./components/Header";
import Rules from "./components/Rules";
import EndingPanel from "./components/EndingPanel";

function App() {
  const { gameEnded, score, gameStarted } = useContext(KnucklebonesContext);

  let content = <Rules />;
  let winnerContent = <EndingPanel red text="Player 2 Wins" />;

  if (score.player1Score > score.player2Score) {
    winnerContent = <EndingPanel green text="Player 1 Wins" />;
  }
  
  if (gameStarted) {
    content = (
      <div className="grid gap-7 items-center">
        <KnucklebonesPage />
        {gameEnded ? <Dice /> : winnerContent}
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
