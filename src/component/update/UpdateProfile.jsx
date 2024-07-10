import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    const {user}=useContext(AuthContext);

    return (
        <div>
            <Helmet>
                <title>Residential state || UpdateProfile</title>
            </Helmet>
          <div className=" text-center mt-8 space-y-4">
          <p className="text-3xl text-white"> <span className="text-lime-400 font-bold">Name:</span> {user.displayName}</p>
          
          <p className="font-xl text-white"> <span className="text-lime-400 font-bold">YourEmail:</span> {user.email}</p>
            <p className="lg:ml-52"><img className="w-72 h-72" src={user.photoURL} alt="" /></p>
          </div>
        </div>
    );
};

export default UpdateProfile;