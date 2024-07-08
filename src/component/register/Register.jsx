import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const Register = () => {
  
const {createUser,setUser}=useContext(AuthContext);
const navigate=useNavigate()


const handleRegister=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
   const photo=e.target.photo.value;
    console.log(name,email,password,photo);

// using firebase//
    createUser(email,password)
    .then((result)=>{
      const createUser=result.user;
      console.log(createUser,'regis');
      navigate('/login')
      setUser(createUser)
   
    })
    .catch((error)=>{
      console.log(error.message);
      
    })
       }


     


    return (
    <div>
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
        
        </div>
        <div className="form-control ">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>RegisteredComplete?now  <Link to="/login"><span  className="font-bold text-green-900">login</span></Link> </p>


        
          </form>
         
    </div>
  </div>
</div>

    </div>
    );
};

export default Register;