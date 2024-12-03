import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GameWidgetProps {
  appName: string;
  navigationId: string, 
  appDescription: string;
  dark: boolean;
}

const GameWidget: React.FC<GameWidgetProps> = ({ appName, navigationId, appDescription, dark }) => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    console.log(`navigating to: /game/${navigationId}`);
    navigate(`/game/${navigationId}`);
  };

  return (
    <div className={`game-widget-container ${dark ? 'game-widget-container-dark' : 'game-widget-container-light'}`}>
      <div className="game-widget-content">
        <div className="game-widget-header">
          <h2>{appName}</h2>
          <h1>ICON</h1>
        </div>
        <div className="game-widget-footer">
          <p className="game-widget-description">{appDescription}</p>
          <button className="game-widget-button" onClick={handlePlayClick}>Play!</button>
        </div>
      </div>
    </div>
  );
};
export default GameWidget;