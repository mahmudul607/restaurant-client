import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import Menu from "../Pages/Menu/Menu";
import Foods from "../Pages/Foods/Foods";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/food/:category",
          element: <Foods></Foods>
        }

      ]
    },
  ]);

export default Router;