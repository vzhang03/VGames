interface GameWidgetProps {
  appName: string;
  appDescription: string;
}

const GameWidget: React.FC<GameWidgetProps> = ({ appName, appDescription }) => {
  return (
    <div className="app-widget-container">
      <h1>{appName}</h1>
      <p>{appDescription}</p>
      <button>Play!</button>
    </div>
  );
};

export default GameWidget;