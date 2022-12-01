import {useContext, useState} from 'react';
import { KnucklebonesContext } from '../context/knucklebones';
import Table from './Table';

function Rules(){
    const {changeGameStarted}=useContext(KnucklebonesContext)
    const data = [
        {first:1, second: 4, third: 9 },
        {first:2, second: 8, third: 18 },
        {first:3, second: 12, third: 27 },
        {first:4, second: 16, third: 36},
        {first:5, second: 20, third: 45 },
        {first:6, second: 24, third: 54 },
    ]

    const config = [
        {label: 'Dice Number', render: (number) => number.first},
        {label: 'Double', render: (number) => number.second},
        {label: 'Triple', render: (number) => number.third},

    ]

    return( <div className="flex justify-center flex-col ml-2 mr-2 items-center">
    <div className="text-2xl mt-5 mb-5">Rules</div>
    <li>Knucklebones is <u>2 person turn game</u>. You can play <u>only on 1 device</u></li>
    <li>Players take turns rolling a single six-sided die and placing it on their side of the board</li>
    <li>Each player has their own 3x3 grid, and their score is the total of all the dice currently placed there.</li>
    <li>When one player has filled all nine slots on their board, the game ends and the player with the highest score wins</li>
    <li>If a player has 2 or 3 dice showing the same number in a single column, their values are added together and multiplied by the number of matches.</li>
    <p className='font-bold mt-5 text-xl'>Values Calculation</p>
    <Table data={data} config={config}/>
    <button className="border pl-10 pr-10 p-5 hover:bg-gray-400 rounded mt-5" onClick={changeGameStarted}>Play!</button>
  </div>)
}

export default Rules;