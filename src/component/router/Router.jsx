import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../home/Home";
import ErrorPage from "../error/ErrorPage";
import Details from "../Details/Details";
import Register from "../register/Register";
import Login from "../login/Login";
import PrivateRoute from "../PrivateRoute";
import UpdateProfile from "../update/UpdateProfile";


const router= createBrowserRouter([
    {
        path:"/",
     element: <Root></Root>,
     errorElement: <ErrorPage />,
     children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/details/:id",
        element:<PrivateRoute><Details></Details></PrivateRoute> ,
       loader:()=>fetch('/src/blog.json')
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/update",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      }
     ]
    },
]);

export default router;





  
  