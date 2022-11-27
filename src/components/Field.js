import { useState } from "react";

function Field({fieldType,id,turn, changeTurn, diceNumber,diceStatus, changeDiceStatus, setFieldStatus, fields, gameStatus}) {

  const setField = () => {
    if(fieldType===turn && diceStatus && gameStatus){
        //setFieldNumber(diceNumber)
        changeTurn();
        changeDiceStatus();
        setFieldStatus(fieldType,diceNumber,id);
    }
  };

  const fieldNumber = () => {
    if(fields[id]===null){
        return <div></div>;
    }
    else{
        return <div>{fields[id]}</div>;
    }
  }
  return (
    <div
      onClick={setField}
      className="p-7 m-auto border hover:bg-gray-200 cursor-pointer"
    >
      {fieldNumber()}
    </div>
  );
}

export default Field;
