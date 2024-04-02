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
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateMenuItem from "../Pages/Dashboard/UpdateMenuItem/UpdateMenuItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import ConfirmOrder from "../Pages/Dashboard/Cart/ConfirmOrder/ConfirmOrder";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";


  const Router = createBrowserRouter(
    
    [
    
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
        {
          path:"payment",
          element: <Payment></Payment>
        },
        {
          path:"bookings",
          element: <AdminRoute><ManageBookings></ManageBookings> </AdminRoute>

        },
        {
          path:"myBooking",
          element: <MyBooking></MyBooking>
        },
        {
          path:"confirmOrder",
          element:<ConfirmOrder></ConfirmOrder>
        },

        // admin routes

        {
          path: "allUsers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>

        },
      {
        path: "addItems",
        element: <AdminRoute><AddItems></AddItems></AdminRoute> 
      },
      {
        path: "manageItems",
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
      {
        path:"updateItem/:id",
        element: <AdminRoute><UpdateMenuItem></UpdateMenuItem></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      }
      ]
    }
  ]);

export default Router;