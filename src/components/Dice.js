import React from "react";

export default function Dice(props) {
  return (
    <div 
      className="dice-face" 
      style={{backgroundColor: props.isHeld ? "#eeaeca" : "white"}} 
      onClick={props.holdDice}>
      <h2 className="dice-num">{props.value}</h2>
    </div>
  );
}