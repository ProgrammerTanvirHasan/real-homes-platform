import { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
  
const {createUser,setUser,passError,setPassError,setSuccess}=useContext(AuthContext);
const navigate=useNavigate()


const handleRegister=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
   const photoURL=e.target.photo.value;
   const terms =e.target.terms.checked;

   setPassError('');
  console.log(name,photoURL,'name and photo');
   
   if(password.length<8){
    setPassError('Password mustBe longer')
   return
   }
   else if(terms==false){
    alert('first checked our terms')
    return
   }
  else if(!/[a-z]/.test(password)){
    setPassError('AtLeast one character must be small letter')
   return
  } 
  
  



// using firebase//
    createUser(email,password)
    .then((result)=>{
      const currentUser=result.user;
      alert('user created successfully')
      
         

      updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL,
      }).then((result) => {
        setSuccess(result.user)
        console.log('updated successfully');
      }).catch((error) => {
        setPassError(error.message)
      });









        navigate('/login')
      setUser(currentUser)
         
    })
      .catch((error)=>{
      setPassError(error.message)
    
      })

     }

     


    return (
    <div>
      <Helmet>
        <title>Residential state || Registration</title>
      </Helmet>
        <div className="hero bg-slate-950 min-h-screen">
  <div className="hero-content ">
   
    <div className="card bg-slate-400 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">

          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="YourName" className="input input-bordered"  />

          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered"  />

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <br />
          <label className="label">
       <p>  <input type="checkbox" name="terms" id="" /> <span>Please check our terms</span> </p>
         </label>
        </div>
        <div className="form-control ">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>RegisteredComplete?now  <Link to="/login"><span  className="font-bold text-green-900">login</span></Link> </p>
 
       {
        passError && <p className="text-red-600">{passError}</p>

       }
      
        
          </form>
         
    </div>
    
  </div>
  
</div>

    </div>
    );
};

export default Register;



