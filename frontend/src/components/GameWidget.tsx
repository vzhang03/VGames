import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GameWidgetProps {
  appName: string;
  navigationId: string, 
  appDescription: string;
}

const GameWidget: React.FC<GameWidgetProps> = ({ appName, navigationId, appDescription }) => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    // Navigate to the game's landing page using appName as the gameId
    console.log(`navigating to: /game/${navigationId}`);
    navigate(`/game/${navigationId}`);
    // navigate(`/game/${appName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="game-widget-container">
      <div className="game-widget-header">
        <h2>{appName}</h2>
        <h1>ICON</h1>
      </div>
      <div className="game-widget-footer">
        <p className="game-widget-description">{appDescription}</p>
        <button className="game-widget-button" onClick={handlePlayClick}>Play!</button>
      </div>
    </div>
  );
};

export default GameWidget;