import { useContext } from "react";
import { KnucklebonesContext } from "./context/knucklebones";

import Dice from "./components/Dice";
import KnucklebonesPage from "./pages/KnucklebonesPage";
import Header from "./components/Header";
import Rules from "./components/Rules";
import EndingPanel from "./components/EndingPanel";
import {useTranslation} from "react-i18next";

function App() {
  const {t, i18n} = useTranslation();
  const { gameEnded, score, gameStarted } = useContext(KnucklebonesContext);

  let content = <Rules />;
  let winnerContent = <EndingPanel red text={t('player2_wins')} />;

  if (score.player1Score > score.player2Score) {
    winnerContent = <EndingPanel green text={t('player1_wins')} />;
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
