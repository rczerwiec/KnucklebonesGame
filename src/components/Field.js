import { useContext } from "react";
import { KnucklebonesContext } from "../context/knucklebones";

function Field({fieldType,id,fields}) {
  const {turn,changeTurn,diceNumber,diceStatus, changeDiceStatus, setFieldStatus,gameStatus} = useContext(KnucklebonesContext);
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
