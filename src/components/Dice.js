import { useState } from "react";

function Dice({onDiceClick, diceNumber, diceStatus, changeDiceStatus}){

    const throwDice =() => {
        if (!diceStatus){
            changeDiceStatus();
            onDiceClick();
        }
    }

    return(<div onClick = {throwDice} className="p-10 m-auto border cursor-pointer">{diceNumber}</div>)
}

export default Dice;