import React from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";

export default function App() {
  const [dices, setDices] = React.useState(allNewDice());

  // Randomize face
  function random() {
    // a dice has 6 faces
    return Math.ceil(Math.random()*6);
  }

  // Generate 10 dices
  function allNewDice() {
    const dices = [];
    while (dices.length < 10) {
      dices.push({
        value: random(),
        isHeld: false,
        id: nanoid()
      });
    }
    return dices;
  }

  function roll() {
    setDices(oldDices => oldDices.map(oldDice => {
      return oldDice.isHeld ? 
        oldDice : 
        {
          ...oldDice,
          value: random()
        };
    }));
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
        <h1 className="title">Tenzies</h1>
        <h2>Get all dices with the same value !</h2>
        <p className="instructions">Click each dice to freeze it at its current value between rolls. <br />
        Roll until all dices are the same.</p>
        <div className="dice-container">
          {diceElements}
        </div>
        <button onClick={roll}>Roll</button>
      </main>
    </div>
  );
}