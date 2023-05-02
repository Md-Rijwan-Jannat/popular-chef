import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // const user = 'dfgsdg'

    // Create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Login
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout
    const logOut =()=>{
        return signOut(auth);
    }
    // google
    const googleUser = ()=>{
        return signInWithPopup(auth, googleProvider);
    }
    // github
    const githubUser = ()=>{
        return signInWithPopup(auth, githubProvider);
    }
    // Obsarve
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (loggedUer)=>{
            console.log(loggedUer);
            setUser(loggedUer);
        })
        return ()=>{
            return unSubscribe();
        }
    },[])
    const authInfo = {
        user,
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