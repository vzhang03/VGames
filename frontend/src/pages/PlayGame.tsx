
import { useParams } from "react-router-dom";
import GuessTheCourse from "../games/GuessTheCourse";
import QuestionOfDay from "../games/QuestionOfDay";

const PlayGame = () => {
  const { gameId } = useParams();

  var gameComponent = <h1>no game found</h1>;

  switch (gameId){
    case "guess-the-course": 
      gameComponent = <GuessTheCourse />
      break; 
    case "question-of-the-day":
      gameComponent = <QuestionOfDay />
      break;
  }

  return (
    <>
      {gameComponent}
    </>
  )
}

export default PlayGame;