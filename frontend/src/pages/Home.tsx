import GameWidget from "../components/GameWidget";
import gameData from '../games/GameData'

interface HomeProps {
}

const Home: React.FC<HomeProps> = ({  }) => {
  return (
    <div>
      <div className="widget-carousel">
      {Object.keys(gameData).map((gameId, index) => {
        const game = gameData[gameId];
        const isOdd = index % 2 !== 0; // `true` if odd, `false` if even
        
        return (
          <GameWidget 
            key={gameId}
            appName={game.name} 
            navigationId={gameId} 
            appDescription={game.description} 
            dark={isOdd} // Pass the boolean if needed in GameWidget
          />
        );
      })}
      </div>
    </div>
  );
};

export default Home;