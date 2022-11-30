import {useContext, useState} from 'react';
import { KnucklebonesContext } from '../context/knucklebones';

function Rules(){
    const {changeGameStarted}=useContext(KnucklebonesContext)
    

    return( <div className="flex justify-center flex-col ml-2 mr-2">
    <div className="m-auto text-2xl mt-5 mb-5">Rules</div>
    <li className="m-auto">Knucklebones is 2 person turn game. You can play this only on 1 device</li>
    <li className="m-auto">Players take turns rolling a single six-sided die and placing it on their side of the board</li>
    <li className="m-auto">Each player has their own 3x3 grid, and their score is the total of all the dice currently placed there.</li>
    <li className="m-auto">When one player has filled all nine slots on their board, the game ends and the player with the highest score wins</li>
    <button className="border pl-10 pr-10 m-auto p-5 hover:bg-gray-400 rounded mt-5" onClick={changeGameStarted}>Play!</button>
  </div>)
}

export default Rules;