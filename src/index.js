import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthState from './context/auth/authState';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
},
{
    path: "/login",
    element: <Login />,
},
{
    path: "/otp",
    element: <Otp />,
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthState>
                <RouterProvider router={router} />
              </AuthState>
  </React.StrictMode>
);

