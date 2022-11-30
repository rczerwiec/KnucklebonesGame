import { useContext} from "react";
import Field from "../components/Field";
import { KnucklebonesContext } from "../context/knucklebones";

function KnucklebonesPage() {
  const {
    gameEnded,
    playerFieldsStatus,
    player2FieldsStatus,
    turn,
  } = useContext(KnucklebonesContext);

  let whosNow = <div className="text-lime-400 m-auto">Player 1 Turn</div>;
  if (!turn) {
    whosNow = <div className="text-red-500 m-auto">Player 2 Turn</div>;
  }
  if (!gameEnded) {
    whosNow = "";
  }

  const playerFields = Array(9)
    .fill()
    .map((_, index) => {
      const id = "player" + index;
      return (
        <Field
        key={id}
        id={index}
        fieldType={true}
        fields={playerFieldsStatus}
        ></Field>
      );
    });

  const enemyFields = Array(9)
    .fill()
    .map((_, index) => {
      const id = "player2" + index;
      return (
        <Field
          key={id}
          id={index}
          fieldType={false}
          fields={player2FieldsStatus}
        ></Field>
      );
    });

  return (
    <div className="flex flex-col justify-center">
      <div className="m-auto">{whosNow}</div>
      <div className="m-auto text-xl">Player 2</div>
      <div className="grid grid-cols-3 grid-rows-3 m-auto mt-5 mb-5">
        {enemyFields}
      </div>
      <div className="grid grid-cols-3 grid-rows-3 m-auto mt-5 mb-5">
        {playerFields}
      </div>
      <div className="m-auto text-xl">Player 1</div>
    </div>
  );
}

export default KnucklebonesPage;
