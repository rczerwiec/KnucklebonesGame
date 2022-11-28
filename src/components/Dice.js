import { useContext } from "react";
import { KnucklebonesContext } from "../context/knucklebones";

function Dice(){

    const {onDiceClick,diceNumber, diceStatus, changeDiceStatus } = useContext(KnucklebonesContext);

    const throwDice =() => {
        if (!diceStatus){
            changeDiceStatus();
            onDiceClick();
        }
    }

    return(<div onClick = {throwDice} className="p-10 m-auto border cursor-pointer">{diceNumber}</div>)
}

export default Dice;