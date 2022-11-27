import { useState } from "react";

import Field from "../components/Field";

function KnucklebonesPage({
  turn,
  changeTurn,
  diceNumber,
  diceStatus,
  changeDiceStatus,
  changeGameStatus,
  gameStatus
}) {
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


  let whosNow = "Your";
  if (!turn) {
    whosNow = "Enemy's";
  }
  if(!gameStatus){
    whosNow = "";
  }


  const playerFields = Array(9)
    .fill()
    .map((_, index) => {
      const id = "player" + index;
      return (
        <Field
          key={id}
          id={index}
          fieldType={true}
          changeTurn={changeTurn}
          diceNumber={diceNumber}
          turn={turn}
          diceStatus={diceStatus}
          changeDiceStatus={changeDiceStatus}
          setFieldStatus={setFieldStatus}
          fields={playerFieldsStatus}
          gameStatus={gameStatus}
        ></Field>
      );
    });

  const enemyFields = Array(9)
    .fill()
    .map((_, index) => {
      const id = "enemy" + index;
      return (
        <Field
          key={id}
          id={index}
          fieldType={false}
          changeTurn={changeTurn}
          diceNumber={diceNumber}
          turn={turn}
          diceStatus={diceStatus}
          changeDiceStatus={changeDiceStatus}
          setFieldStatus={setFieldStatus}
          fields={enemyFieldsStatus}
          gameStatus={gameStatus}
        ></Field>
      );
    });

  return (
    <div className="flex flex-col justify-center">
      <div className="justify-center">{whosNow}</div>
      <div className="">Enemy</div>
      <div className="grid grid-cols-3 grid-rows-3 mt-5 mb-5">
        {enemyFields}
      </div>
      <div className="grid grid-cols-3 grid-rows-3 mt-5 mb-5">
        {playerFields}
      </div>
      <div className="">You</div>
    </div>
  );
}

export default KnucklebonesPage;
