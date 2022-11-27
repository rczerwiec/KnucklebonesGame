import { useState } from 'react';
import Dice from './components/Dice';
import './index.css';
import KnucklebonesPage from "./pages/KnucklebonesPage";


function App(){

    const [turn,setTurn] = useState(true);
    const [diceNumber, setDiceNumber] = useState(1);
    const [diceStatus, setDiceStatus] = useState(false);
    const [gameStatus, setGameStatus] = useState(true);

    const changeGameStatus = (winner, loser) => {
        console.log(winner);
        console.log(loser);
        let winnerScore = 0;
        for(let i=0; i<=2; i++){
            if(winner[0+i]===winner[3+i] && winner[6+i] === winner[3+i]){
                winnerScore = winnerScore+(((winner[0+i]*3)*3))
            }
            else if((winner[0+i] ===winner[3+i]) && (winner[0+i] !== null)){
                winnerScore = winnerScore+((winner[0+i]*2)*2)+winner[6+1]
            }
            else if((winner[3+i] ===winner[6+i]) && (winner[3+i] !== null)){
                winnerScore = winnerScore+((winner[3+i]*2)*2)+winner[0+1]
            }
            else if((winner[6+i] ===winner[0+i]) && (winner[6+i] !== null)){
                winnerScore = winnerScore+((winner[6+i]*2)*2)+winner[3+1]
            }
            else{
                winnerScore=winnerScore+winner[0+i]+winner[3+i]+winner[6+i];
            }
            //console.log("winnerScore",winnerScore)
        }
        console.log(winnerScore);
        let losserScore = 0;
        for(let i=0; i<=2; i++){
            if(loser[0+i]===loser[3+i] && loser[6+i] === loser[3+i]){
                losserScore = losserScore+(((loser[0+i]*3)*3))
                console.log(losserScore);
            }
            else if((loser[0+i] ===loser[3+i]) && (loser[0+i] !== null)){
                losserScore = losserScore+((loser[0+i]*2)*2)+loser[6+1]
                console.log(losserScore);
            }
            else if((loser[3+i] ===loser[6+i]) && (loser[3+i] !== null)){
                losserScore = losserScore+((loser[3+i]*2)*2)+loser[0+1]
                console.log(losserScore);
            }
            else if((loser[6+i] ===loser[0+i]) && (loser[6+i] !== null)){
                losserScore = losserScore+((loser[6+i]*2)*2)+loser[3+1]
                console.log(losserScore);
            }
            else{
                losserScore=losserScore+loser[0+i]+loser[3+i]+loser[6+i];
                console.log(losserScore);
            }
            console.log("losserScore",losserScore)
        }
        setGameStatus(!gameStatus);
        console.log(losserScore);
    }

    const changeDiceStatus = () => {
        setDiceStatus(!diceStatus);
    }
    const onDiceClick = () => {
        const random = Math.floor(Math.random() * 6) + 1;

        setDiceNumber(random);
    }

    const changeTurn = () => {
        setTurn(!turn);
    }



    return(
        <div>
            {gameStatus ? (<div></div>):(<div>KONIEC</div>)}
        <div className="grid grid-cols-2">
            <KnucklebonesPage turn={turn} changeTurn={changeTurn} diceNumber={diceNumber} diceStatus={diceStatus} changeDiceStatus={changeDiceStatus} changeGameStatus={changeGameStatus} gameStatus={gameStatus}/>
            <Dice onDiceClick={onDiceClick} diceNumber={diceNumber} diceStatus={diceStatus} changeDiceStatus={changeDiceStatus}/>
        </div>
        </div>

    )
}

export default App;