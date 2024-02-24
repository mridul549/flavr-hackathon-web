import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthState from './context/auth/authState';
import Signup from './Components/auth/Signup';
import Login from './Components/auth/Login';
import Otp from './Components/auth/Otp';
import SidebarState from './context/sidebar/sidebarState'

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
    <SidebarState>
            
              <AuthState>
                <RouterProvider router={router} />
              </AuthState>
            
      </SidebarState>
  </React.StrictMode>
);

