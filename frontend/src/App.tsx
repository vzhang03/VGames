import './App.css';
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GameLanding from './pages/GameLanding';
import PlayGame from './pages/PlayGame';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/game/:gameId",
    element: <GameLanding />
  },
  {
    path: "/game/:gameId/play",
    element: <PlayGame />
  },
]);

function App() {
  return (
    <>
      {/* <Home /> */}
      <RouterProvider router={router}/>
    </>
  );

}

export default App
