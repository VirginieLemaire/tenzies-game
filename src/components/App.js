import React from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";


export default function App() {
  const [dices, setDices] = React.useState(allNewDice());

  // Generate 10 dices
  function allNewDice() {
    const dices = [];
    while (dices.length < 10) {
      dices.push({
        value: Math.ceil(Math.random()*6),
        isHeld: false,
        id: nanoid()
      }); // 6 faces
    }
    return dices;
  }

  function roll() {
    setDices(allNewDice());
    console.log({dices});
  }

  function holdDice(id) {
    setDices(oldDices => oldDices.map(oldDice => {
      return oldDice.id === id ?
        {...oldDice, isHeld: !oldDice.isHeld} :
        oldDice;
    }));
  }

  const diceElements = dices.map(dice => <Dice value={dice.value} key={dice.id} isHeld={dice.isHeld} holdDice={() => holdDice(dice.id)} />);

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