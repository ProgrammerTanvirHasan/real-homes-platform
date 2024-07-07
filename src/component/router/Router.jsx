import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../home/Home";
import ErrorPage from "../error/ErrorPage";


const router= createBrowserRouter([
    {
        path:"/",
     element: <Root></Root>,
     errorElement: <ErrorPage />,
     children:[
      {
        path:'/',
        element:<Home></Home>
      }
     ]
    },
]);

export default router;





  
  