import GameWidget from "../components/GameWidget";
import gameData from '../games/GameData'

interface HomeProps {
}

const Home: React.FC<HomeProps> = ({  }) => {
  return (
    <div>
      <h1>VGames</h1>

      <div className="widget-carousel">
        {Object.keys(gameData).map((gameId) => {
          const game = gameData[gameId];
          return (
            <GameWidget 
              key={gameId}
              appName={game.name} 
              navigationId={gameId} 
              appDescription={game.description} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;