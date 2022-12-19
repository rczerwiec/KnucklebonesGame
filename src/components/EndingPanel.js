import ClassNames from 'classnames';
import { useContext } from "react";
import { useTranslation } from 'react-i18next';
import { KnucklebonesContext } from "../context/knucklebones";

function EndingPanel({text, red, green}){
    const {t, i18n} = useTranslation();
    const {score} = useContext(KnucklebonesContext)
    const classes = ClassNames({'text-red-500': red, 'text-lime-400':green})
    
    return(    
    <div className="flex border p-2 flex-col items-center text-2xl m-auto animate-bounce">
    <div className={classes}>{text}</div>
    <div>
      {score.player2Score}-{score.player1Score}
    </div>
    <div>
      {t('refresh_to_restart')}
    </div>
  </div>)
}

export default EndingPanel;