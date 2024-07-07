import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../home/Home";
import ErrorPage from "../error/ErrorPage";
import Details from "../Details/Details";


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
        element:<Details></Details>,
       loader:()=>fetch('/src/blog.json')
      }
     ]
    },
]);

export default router;





  
  