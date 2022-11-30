import { useContext } from "react";
import Dice from "./components/Dice";
import KnucklebonesPage from "./pages/KnucklebonesPage";
import { KnucklebonesContext } from "./context/knucklebones";
import Header from "./components/Header";
import Rules from "./components/Rules";

function App() {
  const { gameEnded, score, gameStarted } = useContext(KnucklebonesContext);

  let content = <Rules />;

  let winnerContent = (
    <div className="flex border p-2 flex-col items-center text-2xl m-auto">
      <div className="text-red-500">Player 2 Wins!</div>
      <div>
        {score.player2Score}-{score.player1Score}
      </div>
      <div>
        Refresh page to restart
      </div>
    </div>
  );

  if (score.player1Score > score.player2Score) {
    winnerContent = (
      <div className="flex border-p2 flex-col items-center text-2xl m-auto">
        <div className="text-lime-400">Player 1 Wins!</div>
        <div className="">
          {score.player2Score}-{score.player1Score}
        </div>
        <div>
        Refresh page to restart
      </div>
      </div>
    );
  }

  if (gameStarted) {
    content = (
      <div className="grid gap-7 items-center">
     
        <KnucklebonesPage />
        {gameEnded ?  (<Dice />): (
          winnerContent
        )}
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
