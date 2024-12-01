import GameWidget from "../components/GameWidget";
import gameData from '../games/GameData'

interface HomeProps {
}

const Home: React.FC<HomeProps> = ({  }) => {
  return (
    <div>
      <h1>This is the home screen</h1>

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
  );
};

export default Home;