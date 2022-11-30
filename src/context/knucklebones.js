import { useState } from "react";
import { createContext } from "react";

const KnucklebonesContext = createContext();

function Provider({ children }) {
  const [gameStarted, setGameStarted] = useState(false); //game started or not
  const [gameEnded, setGameEnded] = useState(true); //game ended or not
  const [turn, setTurn] = useState(true); //player1 turn or player2
  const [score, setScore] = useState({player1Score: 0, player2Score:0}); //state for scores
  const [diceNumber, setDiceNumber] = useState(1); //number on throwed dice
  const [diceStatus, setDiceStatus] = useState(false); //status of dice
  const [player2FieldsStatus, setPlayer2FieldsStatus] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]); //player 2 fields status
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
  ]);  //player 1 fields status

  //Check every player1 and player2 fields after putting a dice on field, calculate all options
  const setFieldStatus = (type, number, id) => {
    if (type) {
      let updatedPlayer2Field = [];
      const updatedField = playerFieldsStatus.map((o, index) => {
        if (index === id) {
            updatedPlayer2Field = player2FieldsStatus.map((x, ind) => {
            if (index === 6 || index === 3 || index === 0) {
              if (ind === 6 || ind === 3 || ind === 0) {
                if (x === number) {
                  return null;
                }
              }
            } else if (index === 7 || index === 4 || index === 1) {
              if (ind === 7 || ind === 4 || ind === 1) {
                if (x === number) {
                  return null;
                }
              }
            } else {
              if (ind === 8 || ind === 5 || ind === 2) {
                if (x === number) {
                  return null;
                }
              }
            }

            return x;
          });
          return number;
        }
        return o;
      });

      setPlayer2FieldsStatus(updatedPlayer2Field);
      setPlayerFieldsStatus(updatedField);
      const player2FieldsTaken = updatedField.filter(
        (x) => x != null
      ).length;
      if (player2FieldsTaken === 9)
      changeGameEnded(updatedPlayer2Field, updatedField);


    } else {
      let updatedField = [];
      const updatedPlayer2Field = player2FieldsStatus.map((o, index) => {
        if (index === id) {
            updatedField = playerFieldsStatus.map((x, ind) => {
            if (index === 6 || index === 3 || index === 0) {
              if (ind === 6 || ind === 3 || ind === 0) {
                if (x === number) {
                  return null;
                }
              }
            } else if (index === 7 || index === 4 || index === 1) {
              if (ind === 7 || ind === 4 || ind === 1) {
                if (x === number) {
                  return null;
                }
              }
            } else {
              if (ind === 8 || ind === 5 || ind === 2) {
                if (x === number) {
                  return null;
                }
              }
            }

            return x;
          });
          return number;
        }

        return o;
      });
      setPlayerFieldsStatus(updatedField);
      setPlayer2FieldsStatus(updatedPlayer2Field);

      const enemyFieldsTaken = updatedPlayer2Field.filter((x) => x != null).length;

      if (enemyFieldsTaken === 9)
      changeGameEnded(updatedPlayer2Field,updatedField);
    }
  };

  //Change gameStarted status to true
  const changeGameStarted = () => {
    setGameStarted(!gameStarted);
  };

  //Change gameEnded status to false and calculate the scores
  const changeGameEnded = (player2, player1) => {
    let player2Score = calculateScore(player2);
    let player1Score = calculateScore(player1);

    setScore({ player2Score, player1Score });
    setGameEnded(!gameEnded);
  };

  //Score calculation function
  const calculateScore = (player) =>{
    let playerScore = 0;
    for (let i = 0; i <= 2; i++) {
      if (player[0 + i] === player[3 + i] && player[6 + i] === player[3 + i]) {
        playerScore = playerScore + player[0 + i] * 3 * 3;
      } else if (player[0 + i] === player[3 + i] && player[0 + i] !== null) {
        playerScore = playerScore + player[0 + i] * 2 * 2 + player[6 + 1];
      } else if (player[3 + i] === player[6 + i] && player[3 + i] !== null) {
        playerScore = playerScore + player[3 + i] * 2 * 2 + player[0 + 1];
      } else if (player[6 + i] === player[0 + i] && player[6 + i] !== null) {
        playerScore = playerScore + player[6 + i] * 2 * 2 + player[3 + 1];
      } else {
        playerScore = playerScore + player[0 + i] + player[3 + i] + player[6 + i];
      }
    }

    return playerScore
  }

  //Dice status - dice is throwed or not
  const changeDiceStatus = () => {
    setDiceStatus(!diceStatus);
  };

  //Generate Dice Number 1-6
  const onDiceClick = () => {
    const random = Math.floor(Math.random() * 6) + 1;

    setDiceNumber(random);
  };

  //change turn from player1 to player2 and vice versa
  const changeTurn = () => {
    setTurn(!turn);
  };

  return (
    <KnucklebonesContext.Provider
      value={{
        changeTurn,
        onDiceClick,
        changeDiceStatus,
        changeGameEnded,
        changeGameStarted,
        setFieldStatus,
        diceNumber,
        diceStatus,
        turn,
        gameEnded,
        gameStarted,
        playerFieldsStatus,
        player2FieldsStatus,
        score,
      }}
    >
      {children}
    </KnucklebonesContext.Provider>
  );
}

export { KnucklebonesContext };
export default Provider;
