import React, { useContext, useEffect } from "react";
import { GameContext } from "../contexts/GameContext";
import Square from "./Square";
import Player from "./Player";
import Reset from "./Reset";
import calculateWinner from "../utils/calculateWinner";
import Winner from "./Winner";
import History from "./History";

export default function Board() {
  const { squares, setWhoIsWinner, history } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) setWhoIsWinner(winner);
    console.log(history);
  }, [squares]);
  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} />
        ))}
      </div>
      <History />
    </div>
  );
}
