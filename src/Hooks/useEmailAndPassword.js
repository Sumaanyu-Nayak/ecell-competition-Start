import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


const AuthContext = React.createContext();
export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    
    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password);

    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( (user) => {
            setCurrentUser(user)
        });
    }, []);
    const value ={
        currentUser,
        signup,
    }
  return (
    <AuthContext.Provider value = {value}>
        {children}
    </AuthContext.Provider>
  );
}

