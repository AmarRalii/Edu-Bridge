import React from 'react';
import {
  
  RouterProvider,
  createHashRouter
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/WishList/Wishlist';
import Courses from './Components/Courses/Courses';


export default function App() {
  

  const routes = createHashRouter([
    {
      path:'/',element:<Layout></Layout>,
      children:[
        {index:true,element:<Home/>},
        {path:'Edu-Bridge',element:<Home/>},
        {path:'about',element:<About/>},
        {path:'login',element:<Login/>},
        {path:'signup',element:<SignUp/>},
        {path:'cart',element:<Cart/>},
        {path:'wishlist',element:<Wishlist/>},
        {path:'courses',element:<Courses/>},
      ]
    }
  ])

  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

