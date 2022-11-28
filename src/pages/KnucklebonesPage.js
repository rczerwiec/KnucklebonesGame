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

  let whosNow = "Your Turn";
  if (!turn) {
    whosNow = "Enemy Turn";
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
      <div className="justify-center">{whosNow}</div>
      <div className="">Enemy</div>
      <div className="grid grid-cols-3 grid-rows-3 mt-5 mb-5">
        {enemyFields}
      </div>
      <div className="grid grid-cols-3 grid-rows-3 mt-5 mb-5">
        {playerFields}
      </div>
      <div className="">You</div>
    </div>
  );
}

export default KnucklebonesPage;
