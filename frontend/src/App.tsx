import './App.css';
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GameWidget from './components/GameWidget';
import GameLanding from './components/GameLanding';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  // {
  //   path: "/courses",
  //   element: <GameWidget appName='app1' appDescription='appDescription'/>
  // },
  {
    path: "/game/:gameId",
    element: <GameLanding />
  }
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
