import {useContext, useState} from 'react';
import { KnucklebonesContext } from '../context/knucklebones';
import Table from './Tables/Table';
import TableData from './Tables/TableData';
import TableRow from './Tables/TableRow';

function Rules(){
    const {changeGameStarted}=useContext(KnucklebonesContext)
    

    return( <div className="flex justify-center flex-col ml-2 mr-2 items-center">
    <div className="text-2xl mt-5 mb-5">Rules</div>
    <li>Knucklebones is 2 person turn game. You can play only on 1 device</li>
    <li>Players take turns rolling a single six-sided die and placing it on their side of the board</li>
    <li>Each player has their own 3x3 grid, and their score is the total of all the dice currently placed there.</li>
    <li>When one player has filled all nine slots on their board, the game ends and the player with the highest score wins</li>
    <li>If a player has 2 or 3 dice showing the same number in a single column, their values are added together and multiplied by the number of matches.</li>
    <p className='font-bold mt-5 text-xl'>Values Calculation</p>
    <Table>
        <thead>
        <TableRow>
            <TableData header>Dice Number</TableData>
            <TableData header>Double</TableData>
            <TableData header>Triple</TableData>
        </TableRow>
        </thead>
        <tbody>
        <TableRow>
            <TableData>1</TableData>
            <TableData>4</TableData>
            <TableData>9</TableData>
        </TableRow>
        <TableRow >
            <TableData>2</TableData>
            <TableData>8</TableData>
            <TableData>18</TableData>
        </TableRow>
        <TableRow>
            <TableData>3</TableData>
            <TableData>12</TableData>
            <TableData>27</TableData>
        </TableRow>
        <TableRow>
            <TableData>4</TableData>
            <TableData>16</TableData>
            <TableData>36</TableData>
        </TableRow>
        <TableRow>
            <TableData>5</TableData>
            <TableData>20</TableData>
            <TableData>45</TableData>
        </TableRow>
        <TableRow>
            <TableData>6</TableData>
            <TableData>24</TableData>
            <TableData>54</TableData>

        </TableRow>
        </tbody>
    </Table>
    <button className="border pl-10 pr-10 p-5 hover:bg-gray-400 rounded mt-5" onClick={changeGameStarted}>Play!</button>
  </div>)
}

export default Rules;