import { useState } from "react";
import "./styles.css";

export default function App() {
  const [playerTurn, changePlayerTurn] = useState("red");
  const [column, changeColumn] = useState([]);

  function dropSlotInColumn() {
    if (column.length < 6) {
      let newColumn = [...column, playerTurn];
      changeColumn(newColumn);
      togglePlayerTurn();
    }
  }

  function togglePlayerTurn() {
    if (playerTurn === "red") {
      changePlayerTurn("yellow");
    } else {
      changePlayerTurn("red");
    }
  }

  return (
    <div className="App">
      <div className="blue" onClick={dropSlotInColumn}>
        <div className={`slot ${column[5]}`}></div>
        <div className={`slot ${column[4]}`}></div>
        <div className={`slot ${column[3]}`}></div>
        <div className={`slot ${column[2]} `}></div>
        <div className={`slot ${column[1]}`}></div>
        <div className={`slot ${column[0]}`}></div>
      </div>{" "}
      It is {playerTurn}'s turn{" "}
    </div>
  );
}
