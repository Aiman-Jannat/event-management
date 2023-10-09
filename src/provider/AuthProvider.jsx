import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [userr, setUser] = useState();
    const [loading, setLoading] = useState(true);
  

    const createUser = (email, password,name,url) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            
            updateProfile(result.user,{
              displayName: name,
              photoURL: url
          })
          
          })
          
          
          
          

    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        
    }
    const logout = () =>{
        setLoading(true);
       return signOut(auth);
    }
    useEffect(()=>{
        onAuthStateChanged(auth, currentUser=>{
          setUser(currentUser);
          setLoading(false);
      })},[]);
     
      
    



    const authInfo = {
        createUser,
        signIn,
        userr,
        setUser,
        logout,
        loading
        
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;