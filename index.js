import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import OrderSuccess from './components/OrderSuccess';
import SignUp from './components/SignUp';
import Login from './components/Login';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <OrderSuccess />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

