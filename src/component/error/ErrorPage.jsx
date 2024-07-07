import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
    <div className="bg-slate-950 w-[80%] mx-auto rounded-3xl">
          <div className="text-center items-center lg:mt-32 p-36 ">
        
        <h1 className="text-5xl text-white ">404</h1>
       <h2 className="text-3xl font-bold text-white">Page not found !</h2>
  <Link to='/'>
  <button className="btn btn-error mt-2">Go To Home</button>
  </Link>
 
   </div>
    </div>
        );
};

export default ErrorPage;