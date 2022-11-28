import { useState } from "react";
import { createContext } from "react";


const KnucklebonesContext = createContext();

function Provider({children}){

    const [turn,setTurn] = useState(true);
    const [diceNumber, setDiceNumber] = useState(1);
    const [diceStatus, setDiceStatus] = useState(false);
    const [gameStatus, setGameStatus] = useState(true);

    const [playerFieldsStatus, setPlayerFieldsStatus] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ]);
      const [enemyFieldsStatus, setEnemyFieldsStatus] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ]);
    
      const setFieldStatus = (type,number,id) => {
        if(type){
            let updatedEnemyField = []
            const updatedField = playerFieldsStatus.map((o,index) => {
                if(index === id){
                    updatedEnemyField =enemyFieldsStatus.map((x, ind)=>{
                        if(index===6 || index === 3|| index ===0){
                            if(ind===6|| ind ===3 || ind===0){
                                if(x===number){
                                    return null;
                                }
                            }
                        }
                        else if(index===7 || index === 4|| index ===1){
                            if(ind===7|| ind ===4 || ind===1){
                                if(x===number){
                                    return null;
                                }
                            }
                        }
                        else{
                            if(ind===8|| ind ===5 || ind===2){
                                if(x===number){
                                    return null;
                                }
                            }
                        }
    
                        return x;
                    })
                    return number;
                }
                
                return o;
            })
            setEnemyFieldsStatus(updatedEnemyField)
            setPlayerFieldsStatus(updatedField)
            const playerFieldsTaken = updatedEnemyField.filter(x => x!=null).length;
            const enemyFieldsTaken = updatedField.filter(x => x!=null).length;
            if(playerFieldsTaken === 9) changeGameStatus(updatedEnemyField,updatedField);
            if(enemyFieldsTaken === 9) changeGameStatus(updatedField,updatedEnemyField);
        }
        else{
            let updatedEnemyField = []
            const updatedField = enemyFieldsStatus.map((o,index) => {
                if(index === id){
                    updatedEnemyField = playerFieldsStatus.map((x, ind)=>{
                        if(index===6 || index === 3|| index ===0){
                            if(ind===6|| ind ===3 || ind===0){
                                if(x===number){
                                    return null;
                                }
                            }
                        }
                        else if(index===7 || index === 4|| index ===1){
                            if(ind===7|| ind ===4 || ind===1){
                                if(x===number){
                                    return null;
                                }
                            }
                        }
                        else{
                            if(ind===8|| ind ===5 || ind===2){
                                if(x===number){
                                    return null;
                                }
                            }
                        }
    
                        return x;
                    })
                    return number;
                }
    
                return o;
            })
            setPlayerFieldsStatus(updatedEnemyField)
            setEnemyFieldsStatus(updatedField)
            const playerFieldsTaken = updatedEnemyField.filter(x => x!=null).length;
            const enemyFieldsTaken = updatedField.filter(x => x!=null).length;
    
              if(playerFieldsTaken === 9) changeGameStatus(updatedEnemyField,updatedField);
              if(enemyFieldsTaken === 9) changeGameStatus(updatedField,updatedEnemyField);
        }
    
      }

    const changeGameStatus = (winner, loser) => {
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
            }
            else if((loser[0+i] ===loser[3+i]) && (loser[0+i] !== null)){
                losserScore = losserScore+((loser[0+i]*2)*2)+loser[6+1]
            }
            else if((loser[3+i] ===loser[6+i]) && (loser[3+i] !== null)){
                losserScore = losserScore+((loser[3+i]*2)*2)+loser[0+1]
            }
            else if((loser[6+i] ===loser[0+i]) && (loser[6+i] !== null)){
                losserScore = losserScore+((loser[6+i]*2)*2)+loser[3+1]
            }
            else{
                losserScore=losserScore+loser[0+i]+loser[3+i]+loser[6+i];

            }

        }
        setGameStatus(!gameStatus);

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




    return <KnucklebonesContext.Provider value={{
        changeTurn,
        onDiceClick,
        changeDiceStatus,
        changeGameStatus,
        diceNumber,
        diceStatus,
        turn,
        gameStatus,
        setFieldStatus,
        playerFieldsStatus,
        enemyFieldsStatus,
    }}>
        {children}
    </KnucklebonesContext.Provider>
}

export {KnucklebonesContext}
export default Provider;