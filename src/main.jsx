import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root/Root.jsx';
import Home from './pages/home/Home.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Reviews from './pages/reviews/Reviews.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Profile from './pages/profile/Profile.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/aboutus',
        element:<AboutUs></AboutUs>
      },
      {
        path:'/reviews',
        element:<Reviews></Reviews>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
