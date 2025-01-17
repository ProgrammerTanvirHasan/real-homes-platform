import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const Login = () => {
  
const {signUser,googleSignIn,githubSignIn,setUser,success,setSuccess}=useContext(AuthContext)
const location=useLocation()
const navigate=useNavigate()
const googleProvider=new GoogleAuthProvider()
const githubProvider= new GithubAuthProvider()

 const handleLogin=e=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    

    setSuccess('')

   

    
    
    
    

// signIn in firebase///
  signUser(email,password)
  .then((result)=>{
    const signUser=result.user;
     setUser(signUser)
   setSuccess('signIn Successfully')
   alert('signIn successfully')
// navigate after login////
    navigate(location?.state? location.state:'/')
  })
  .catch((error)=>{
    console.log(error.message);
  })
   
 }


// loginWithGoogle and github///

 const handleGoogle=()=>{
  googleSignIn(googleProvider)
   .then((result)=>{
    const googleUser=result.user
    setUser(googleUser)
    
  navigate(location?.state? location.state:'/')
  })
  .catch((error)=>{
    
   console.log(error.message);
 })
 }

 const handleGithub=()=>{
  githubSignIn(githubProvider)
  .then((result)=>{
    const gitUser=result.user
   setUser(gitUser)
   
   
   
     navigate(location?.state? location.state:'/')
  })
  .catch((error)=>{
   console.log(error.message);
  
  })

 }





    return (
        <div>
          <Helmet>
            <title>Residential state || logIn</title>
          </Helmet>
             <div className="hero bg-slate-950 min-h-screen">
  <div className="hero-content ">
   
    <div className="card bg-slate-400 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">

          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="YourName" className="input input-bordered"  />

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
          
          
        </div>
        <div className="form-control">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>First Register?please <Link to="/register"><span  className="font-bold text-green-900">Register</span></Link> </p>
       <div className="flex gap-4">
       <button className="btn  btn-success" onClick={handleGoogle} >SignInWithGoogle</button>
       <button className="btn btn-secondary" onClick={handleGithub}>SignInWithGithub</button>
       </div>
      {
        success && <p className="text- text-xl">{success}</p>
      }
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default Login;