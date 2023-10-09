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
import AuthProvider, { AuthContext } from './provider/AuthProvider.jsx';
import Error from './pages/Error.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';
import ShowDetails from './pages/ShowDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
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
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/home/:id',
        element:<PrivateRoute><ShowDetails></ShowDetails></PrivateRoute>,
        loader:()=>fetch('/services.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)
