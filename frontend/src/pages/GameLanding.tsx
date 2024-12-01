import React from "react";
import { useParams, Link } from "react-router-dom";
import gameData from '../games/GameData';

function GameLanding() {
  const { gameId } = useParams();
  const game = gameData[gameId];

  if (!game) {
    return <h1>Game not found</h1>;
  }

  return (
    <div>
      <h1>{game.name}</h1>
      <p>{game.description}</p>
      <p>{game.playInstructions}</p>
      <Link to={`/game/${gameId}/play`}>
        <button>Play Game</button>
      </Link>
    </div>
  );
}

export default GameLanding;