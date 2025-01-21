import { useState } from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Marketplace from './pages/Marketplace';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
          
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Signup />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <Profile />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <Marketplace />
        </>
      ),
    },
  
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
