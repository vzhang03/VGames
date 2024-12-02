import './App.css';
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import GameLanding from './pages/GameLanding';
import PlayGame from './pages/PlayGame';
import Layout from './pages/Layout'; // Import your Layout component

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout with Navbar
    children: [
      { path: '/', element: <Home /> },
      { path: 'game/:gameId', element: <GameLanding /> },
      { path: 'game/:gameId/play', element: <PlayGame /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;