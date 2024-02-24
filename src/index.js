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
import Menu from './Components/dashboard/Menu/Menu'
import CategoryState from './context/category/categoryState';
import Dashboard from './Components/dashboard/Dashboard';
import Category from './Components/dashboard/Menu/Category';

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
{
  path: "/category",
  element: <Category />
},
{
  path: '/dashboard',
  element: <Dashboard />,
  children:[
      {
          path:"menu",
          element:<Menu/>
      },
      
  ]
},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarState>
            <CategoryState>
              <AuthState>
                <RouterProvider router={router} />
              </AuthState>
            </CategoryState>
          </SidebarState>
  </React.StrictMode>
);

