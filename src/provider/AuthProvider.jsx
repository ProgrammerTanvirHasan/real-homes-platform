import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

import app from "../firebase/firebase.config";



export const AuthContext=createContext(null)
const auth = getAuth(app);


const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
const [passError,setPassError]=useState('')
const [success,setSuccess]=useState('')

console.log(user);

const createUser=(email,password)=>{
    setLoading(true)
   
    return createUserWithEmailAndPassword(auth,email,password)
    
}




const signUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut=()=>{
    setLoading(true)
    return signOut(auth);
}


const googleSignIn=(googleProvider)=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

const githubSignIn=(githubProvider)=>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
}





useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    });
    return ()=>{
        unSubscribe();
    } 
},[])



const authInfo={
    user,
    setUser,
    createUser,
    signUser,
    logOut,
    loading,
    googleSignIn,
    githubSignIn,
    passError,
    setPassError,
    success,
    setSuccess,
   
  
 
   
  
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        
    );
  
  
};

export default AuthProvider;