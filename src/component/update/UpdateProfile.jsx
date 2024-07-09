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
          <p className="text-3xl text-white">Display Name:{user.displayName}</p>
          <p>{user.email}</p>
        
        </div>
    );
};

export default UpdateProfile;