import { useState } from "react";
import "./Square.css";

type squareProp={
    value:String;
    onSquareClick:() => void;
}

function Square({value,onSquareClick}:squareProp) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
