import React from "react";
import Dice from "./Dice";


export default function App() {
  const [dices, setDices] = React.useState(allNewDice());

  // Generate 10 dices
  function allNewDice() {
    const dices = [];
    while (dices.length < 10) {
      dices.push({
        value: Math.ceil(Math.random()*6),
        isHeld: false
      }); // 6 faces
    }
    return dices;
  }

  function roll() {
    setDices(allNewDice());
    console.log({dices});
  }

  const diceElements = dices.map(dice => <Dice value={dice.value} />);
  // TODO: generate a unique key later

  return (
    <div className="container">
      <main>
        <div className="dice-container">
          {diceElements}
        </div>
        <button onClick={roll}>Roll</button>
      </main>
    </div>
  );
}