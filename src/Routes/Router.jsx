import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import Menu from "../Pages/Menu/Menu";
import Foods from "../Pages/Foods/Foods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";


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
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/booking",
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }

      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        // users routes
        {
          path:"cart",
          element:<Cart></Cart>
        },

        // admin routes

        {
          path: "allUsers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>

        },
      {
        path: "addItems",
        element: <AdminRoute><AddItems></AddItems></AdminRoute> 
      }
      ]
    }
  ]);

export default Router;