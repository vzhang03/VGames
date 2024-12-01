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
    <div className="app-widget-container">
      <h1>{appName}</h1>
      <p>{appDescription}</p>
      <button onClick={handlePlayClick}>Play!</button>
    </div>
  );
};

export default GameWidget;