import React from "react";
import Dice from "./Dice";


export default function App() {
  const [dices, setDices] = React.useState(allNewDice());

  // Generate 10 dices
  function allNewDice() {
    const dices = [];
    while (dices.length < 10) {
      dices.push(Math.ceil(Math.random()*6)); // 6 faces
    }
    return dices;
  }

  function roll() {
    setDices(allNewDice());
    console.log({dices});
  }

  const diceElements = dices.map(dice => <Dice value={dice}/>);
  // TODO: generate a unique key later

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={roll}>Roll</button>
    </main>
  );
}