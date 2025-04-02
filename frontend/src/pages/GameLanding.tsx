import React from "react";
import { useParams, Link } from "react-router-dom";
import gameData from '../games/GameData';

function GameLanding() {
  const { gameId } = useParams();
  const game = gameData[gameId];

  const today = new Date();

  if (!game) {
    return <h1>Game not found</h1>;
  }

  return (
    <div className="landing-page">
      <h1 className="landing-title">{game.name}</h1>
      <p className='landing-description'>{game.description}</p>
      <p className='landing-instruction'>{game.playInstructions}</p>
      <Link to={`/game/${gameId}/play`}>
        <button className="landing-button">Play</button>
      </Link>
      <p className='landing-date'>{today.toLocaleString('en-US', { month: 'long' })} {today.getDate()}, {today.getFullYear()}</p>
    </div>
  );
}

export default GameLanding;