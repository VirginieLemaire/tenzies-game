import React from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dices, setDices] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(function() {
    // conditions :
    // 1- all dices are Held
    const allDicesAreHeld = (currentValue) => currentValue.isHeld;
    // 2- all dices have the same value
    const allDicesHaveSameValue = (currentValue) => currentValue.value === dices[0].value;
    // check conditions and update state
    if (dices.every(allDicesAreHeld) && dices.every(allDicesHaveSameValue)) {
      setTenzies(true);
    }
  }, [dices]);

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
  
  function rollDices() {
    if (!tenzies) {
      setDices(oldDices => oldDices.map(oldDice => {
        return oldDice.isHeld ? oldDice : {...oldDice, value: random()};
      }));
    } else {
      setTenzies(false);
      setDices(allNewDice());
    }
  }

  function holdDice(id) {
    setDices(oldDices => oldDices.map(oldDice => {
      return oldDice.id === id ?
        {...oldDice, isHeld: !oldDice.isHeld} :
        oldDice;
    }));
  }

  const diceElements = dices.map(dice => (
    <Dice 
      value={dice.value} 
      key={dice.id} 
      isHeld={dice.isHeld} 
      holdDice={() => holdDice(dice.id)}
    />
  ));

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
        <button onClick={rollDices}>{tenzies ? "Play again" : "Roll"}</button>
        { tenzies && <Confetti />}
      </main>
    </div>
  );
}