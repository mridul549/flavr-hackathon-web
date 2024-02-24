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
import EditCategory from './Components/dashboard/Menu/EditCategory';
import ErrorPage from './Components/ErrorPage';
import OrderState from './context/orders/orderState';
import OrderHistory from './Components/dashboard/Order/OrderHistory';
import OrderItem from './Components/dashboard/Order/OrderItem';
import Orders from './Components/dashboard/Order/Orders';
import Profile from './Components/Profile';

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
  path: "/orderitem",
  element: <OrderItem />
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
      {
        path: "editcategory/:id",
        element: <EditCategory />
      },
      {
        path: "addcategory",
        element: <EditCategory />
      },
      {
        path: "*",
        element: <ErrorPage />
      },
      {
        path:"orders/history",
        element:<OrderHistory/>
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path:"orders/handling",
        element:<Orders/>
    },
  ]
},
{
  path: "*",
  element: <ErrorPage />
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrderState>
          <SidebarState>
            <CategoryState>
              <AuthState>
                <RouterProvider router={router} />
              </AuthState>
            </CategoryState>
          </SidebarState>
        </OrderState>
  </React.StrictMode>
);

