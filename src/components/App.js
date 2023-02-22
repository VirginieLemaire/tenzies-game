import React from "react";
import Dice from "./Dice";

// Generate 10 dices
function allNewDice() {
  const dices = [];
  while (dices.length < 10) {
    dices.push(Math.ceil(Math.random()*6)); // 6 faces
  }
  return dices;
}

export default function App() {
  const [dices/* , setDices */] = React.useState(allNewDice());

  return (
    <main>
      <div className="dice-container">
        {dices.map(dice => (
          <Dice value={dice} key={dice}/> // TODO: generate a unique key later
        ))}
      </div>
    </main>
  );
}