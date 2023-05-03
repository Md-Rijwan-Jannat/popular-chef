import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    // const user = 'dfgsdg'

    // Create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Login
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout
    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }
    // google
    const googleUser = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    // github
    const githubUser = ()=>{
        setLoading(ture)
        return signInWithPopup(auth, githubProvider);
    }
    // Obsarve
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (loggedUer)=>{
            console.log(loggedUer);
            setUser(loggedUer);
            setLoading(false)
        })
        return ()=>{
            return unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleUser,
        githubUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;