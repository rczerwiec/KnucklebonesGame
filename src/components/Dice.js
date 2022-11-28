import { useContext } from "react";
import { KnucklebonesContext } from "../context/knucklebones";
import One from '../static/svg/dice-six-faces-one.svg'
import Two from '../static/svg/dice-six-faces-two.svg'
import Three from '../static/svg/dice-six-faces-three.svg'
import Four from '../static/svg/dice-six-faces-four.svg'
import Five from '../static/svg/dice-six-faces-five.svg'
import Six from '../static/svg/dice-six-faces-six.svg'

function Dice() {
  const { onDiceClick, diceNumber, diceStatus, changeDiceStatus } =
    useContext(KnucklebonesContext);

  const throwDice = () => {
    if (!diceStatus) {
      changeDiceStatus();
      onDiceClick();
    }
  };

  let text = <div className="text-lime-400 m-auto">Throw a Dice!</div>;

  if (diceStatus) {
    text = <div className="text-red-500 m-auto">Make a turn!</div>;
  }

  let dice = One

  if (diceNumber===2) dice = Two
  else if (diceNumber===3) dice = Three
  else if (diceNumber===4) dice = Four
  else if (diceNumber===5) dice = Five
  else if (diceNumber===6) dice = Six


  return (
    <div className="flex flex-col m-auto">
      <div>{text}</div>
    <img onClick={throwDice} className="m-auto w-20 border rounded-lg cursor-pointer" alt={diceNumber} src={dice}></img>

    </div>
  );
}

export default Dice;
