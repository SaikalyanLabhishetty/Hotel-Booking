import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Appsignup from './components/Appsignup';
import AppBook from './components/AppBook';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/AppSignup",
    element: <Appsignup/>,
  },
  {
    path:"/AppBook",
    element: <AppBook/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
