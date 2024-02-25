import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Context from './data/context';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Liked from './pages/Liked/Liked';
import Layout from './pages/Layout/Layout';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/liked",
      element:<Liked/>

    },
    {
      path:"/:estate",
      element:<Layout/>
    }
  ])
  return (
    <Context>
      <RouterProvider router={router}>

      </RouterProvider>
    </Context>
  );
}

export default App;
