import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {

    const links = <>
    <li> <NavLink  to="/">Home</NavLink> </li>
    <li> <NavLink  to="/updateProfile">UpdateProfile</NavLink> </li>
    <li> <NavLink  to="/userProfile">UserProfile</NavLink> </li>
     </>
    


    return (
        <div className="bg-violet-600 py-8 rounded-t-md ">
            <div className="navbar w-[95%] mx-auto ">
  <div className="navbar-start">
  <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow rounded-box bg-violet-500 w-52 text-white">
        {
            links
        }
      </ul>
   
    </div>
    <div className="flex">
    <div >
         <FaHome className="w-8 h-8 text-white"></FaHome>
    </div>
    <div>
    <h2 className="text-2xl mb-4 text-white">Real <span className="text-lime-500 font-semibold">Homes</span> </h2>
    </div>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul tabIndex={0} className="flex gap-4 text-white font-semibold">
        {
            links
        }
      </ul>
  </div>
  <div className="navbar-end">
  <img className="w-12 rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
        </div>
    );
};

export default NavigationBar;