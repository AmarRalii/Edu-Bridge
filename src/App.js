import React from 'react';
import {
  
  RouterProvider,
  createHashRouter
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/LandingPage/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/WishList/Wishlist';
import Courses from './Components/Courses/Courses';
import Dashboard from './Components/Dashboard/Dashboard';
import Category from './Components/Category/Category';
import Profile from './Components/Profile/Profile';
import Setting from './Components/Setting/Setting';



export default function App() {
  

  const routes = createHashRouter([
    {
      path:'/',element:<Layout></Layout>,
      children:[
        {index:true,element:<Home/>},
        {path:'Edu-Bridge',element:<Home/>},
        {path:'dashboard',element:<Dashboard/> ,children:[
          
          {index:true,element:<Courses/>},
          {path:'category',element:<Category/>},
          {path:'profile',element:<Profile/>},
          {path:'setting',element:<Setting/>},
          {path:'about',element:<About/>},
          {path:'cart',element:<Cart/>},
          {path:'wishlist',element:<Wishlist/>},
        ]},
        {path:'login',element:<Login/>},
        {path:'signup',element:<SignUp/>},
      ]
    }
  ])

  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

