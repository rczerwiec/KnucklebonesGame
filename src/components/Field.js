import { useContext } from "react";
import { KnucklebonesContext } from "../context/knucklebones";
import One from '../static/svg/dice-six-faces-one.svg'
import Two from '../static/svg/dice-six-faces-two.svg'
import Three from '../static/svg/dice-six-faces-three.svg'
import Four from '../static/svg/dice-six-faces-four.svg'
import Five from '../static/svg/dice-six-faces-five.svg'
import Six from '../static/svg/dice-six-faces-six.svg'

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


  let dice = One

  if (fields[id]===2) dice = Two
  else if (fields[id]===3) dice = Three
  else if (fields[id]===4) dice = Four
  else if (fields[id]===5) dice = Five
  else if (fields[id]===6) dice = Six

  const fieldNumber = () => {
    if(fields[id]===null){
        return <div className="w-20 h-20 m-auto"></div>;
    }
    else{
        return <div className="w-20 h-20 m-auto"><img className="rounded-lg cursor-pointer" alt={diceNumber} src={dice}></img></div>
    }
  }

  return (
    <div
      onClick={setField}
      className="border hover:bg-gray-200 cursor-pointer"
    >
      {fieldNumber()}
    </div>
  );
}

export default Field;
