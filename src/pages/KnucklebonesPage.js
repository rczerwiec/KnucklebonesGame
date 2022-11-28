import { useContext} from "react";

import Field from "../components/Field";
import { KnucklebonesContext } from "../context/knucklebones";

function KnucklebonesPage() {
  const {
    gameStatus,
    playerFieldsStatus,
    enemyFieldsStatus,
    turn,
  } = useContext(KnucklebonesContext);

  let whosNow = <div className="text-lime-400 m-auto">Your Turn</div>;
  if (!turn) {
    whosNow = <div className="text-red-500 m-auto">Enemy Turn</div>;
  }
  if (!gameStatus) {
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
      const id = "enemy" + index;
      return (
        <Field
          key={id}
          id={index}
          fieldType={false}
          fields={enemyFieldsStatus}
        ></Field>
      );
    });

  return (
    <div className="flex flex-col justify-center">
      <div className="m-auto">{whosNow}</div>
      <div className="m-auto text-xl">Enemy</div>
      <div className="grid grid-cols-3 grid-rows-3 m-auto mt-5 mb-5">
        {enemyFields}
      </div>
      <div className="grid grid-cols-3 grid-rows-3 m-auto mt-5 mb-5">
        {playerFields}
      </div>
      <div className="m-auto text-xl">You</div>
    </div>
  );
}

export default KnucklebonesPage;
