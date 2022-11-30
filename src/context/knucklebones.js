import { useState } from "react";
import { createContext } from "react";

const KnucklebonesContext = createContext();

function Provider({ children }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(true);
  const [turn, setTurn] = useState(true);
  const [score, setScore] = useState({player1Score: 0, player2Score:0});
  const [diceNumber, setDiceNumber] = useState(1);
  const [diceStatus, setDiceStatus] = useState(false);
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
  ]);
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
  ]);  



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

  const changeGameStarted = () => {
    setGameStarted(!gameStarted);
  };

  const changeGameEnded = (winner, loser) => {
    calculateScores(winner, loser)
    setGameEnded(!gameEnded);
  };

  const calculateScores = (player2, player1) => {
    let player2Score = 0;
    for (let i = 0; i <= 2; i++) {
      if (player2[0 + i] === player2[3 + i] && player2[6 + i] === player2[3 + i]) {
        player2Score = player2Score + player2[0 + i] * 3 * 3;
      } else if (player2[0 + i] === player2[3 + i] && player2[0 + i] !== null) {
        player2Score = player2Score + player2[0 + i] * 2 * 2 + player2[6 + 1];
      } else if (player2[3 + i] === player2[6 + i] && player2[3 + i] !== null) {
        player2Score = player2Score + player2[3 + i] * 2 * 2 + player2[0 + 1];
      } else if (player2[6 + i] === player2[0 + i] && player2[6 + i] !== null) {
        player2Score = player2Score + player2[6 + i] * 2 * 2 + player2[3 + 1];
      } else {
        player2Score =
        player2Score + player2[0 + i] + player2[3 + i] + player2[6 + i];
      }
      //console.log("winnerScore",winnerScore)
    }
    let player1Score = 0;
    for (let i = 0; i <= 2; i++) {
      if (player1[0 + i] === player1[3 + i] && player1[6 + i] === player1[3 + i]) {
        player1Score = player1Score + player1[0 + i] * 3 * 3;
      } else if (player1[0 + i] === player1[3 + i] && player1[0 + i] !== null) {
        player1Score = player1Score + player1[0 + i] * 2 * 2 + player1[6 + 1];
      } else if (player1[3 + i] === player1[6 + i] && player1[3 + i] !== null) {
        player1Score = player1Score + player1[3 + i] * 2 * 2 + player1[0 + 1];
      } else if (player1[6 + i] === player1[0 + i] && player1[6 + i] !== null) {
        player1Score = player1Score + player1[6 + i] * 2 * 2 + player1[3 + 1];
      } else {
        player1Score = player1Score + player1[0 + i] + player1[3 + i] + player1[6 + i];
      }
    }
    setScore({ player2Score, player1Score });
  }

  const changeDiceStatus = () => {
    setDiceStatus(!diceStatus);
  };
  const onDiceClick = () => {
    const random = Math.floor(Math.random() * 6) + 1;

    setDiceNumber(random);
  };

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
