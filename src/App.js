import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/LandingPage/Home";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/WishList/Wishlist";
import Courses from "./Components/Courses/Courses";
import Dashboard from "./Components/Dashboard/Dashboard";
import Category from "./Components/Category/Category";
import Profile from "./Components/Profile/Profile";
import Setting from "./Components/Setting/Setting";
import Design from "./Components/Category/SubCategory/Design/Design";
import Development from "./Components/Category/SubCategory/Development/Development ";
import Marketing from "./Components/Category/SubCategory/Marketing/Marketing";
import Business from "./Components/Category/SubCategory/Business/Business";
import Photography from "./Components/Category/SubCategory/photography/Photography";
import UxDesign from './Components/Category/SubCategory/Design/Sub-SubCategories/UxDesign';
import WebDesign from './Components/Category/SubCategory/Design/Sub-SubCategories/WebDesign';
import Graphic from './Components/Category/SubCategory/Design/Sub-SubCategories/Graphic';
import UiDesign from './Components/Category/SubCategory/Design/Sub-SubCategories/UiDesign';
import Animation from './Components/Category/SubCategory/Design/Sub-SubCategories/Animation';
import GameDesign from './Components/Category/SubCategory/Design/Sub-SubCategories/GameDesign';
import Fashiondesign from './Components/Category/SubCategory/Design/Sub-SubCategories/Fashiondesign';

export default function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home /> },
        { path: "Edu-Bridge", element: <Home /> },
        {
          path: "dashboard",
          element: <Dashboard />,
          children: [
            { index: true, element: <Courses /> },
            { path: "profile", element: <Profile /> },
            { path: "setting", element: <Setting /> },
            { path: "about", element: <About /> },
            { path: "cart", element: <Cart /> },
            { path: "wishlist", element: <Wishlist /> },
            {
              path: "category",
              element: <Category />,
              children: [
                { path: 'design', element: <Design></Design>,children:[
                  {index:true,element:<UxDesign></UxDesign>},
                  {path:'webDesign',element:<WebDesign></WebDesign>},
                  {path:'GraphicDesign',element:<Graphic></Graphic>},
                  {path:'UiDesign',element:<UiDesign></UiDesign>},
                  {path:'Animation',element:<Animation></Animation>},
                  {path:'GameDesign',element:<GameDesign></GameDesign>},
                  {path:'FashionDesign',element:<Fashiondesign></Fashiondesign>},
                ]},
                { path: "development", element: <Development></Development> },
                { path: "Marketing", element: <Marketing></Marketing> },
                { path: "Business", element: <Business></Business> },
                { path: "photography", element: <Photography></Photography> },
              ],
            },
          ],
        },
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
