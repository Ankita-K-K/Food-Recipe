import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Favourites from './pages/favorites/Favourites';
import Details from './pages/details/Details';
import Error from './pages/error/Error';
import GlobalState from './context/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRoute = createBrowserRouter([
  {
  path:'/',
  element:<App />,
  children:[
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/favorites',
      element:<Favourites />
    },
    {
      path:'/recipe/:food_id',
      element:<Details />
    }
  ],
  errorElement:<Error />
}
])
root.render(
  <React.StrictMode>
    <RouterProvider router={appRoute}>
    <GlobalState>
      <App />
    </GlobalState>
    </RouterProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
