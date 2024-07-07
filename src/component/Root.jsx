import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavigationBar from "./nav/NavigationBar";


const Root = () => {
    return (
        <div className="bg-slate-900 ">
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;