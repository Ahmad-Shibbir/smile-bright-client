import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    // const provider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading ] = useState(true);

    const providerLogin = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }




    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user inside dtate chande', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return()=>{
            unsubscribe();
            
        }
    },[])

   
    const info= {user, loading, providerLogin, logOut, createUser, signIn}

    return (
        <div>
           <AuthContext.Provider value={info}>
                {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;