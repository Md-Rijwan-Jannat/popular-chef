import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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
    // google
    const googleUser = ()=>{
        return signInWithPopup(auth, googleProvider);
    }
    // github
    const githubUser = ()=>{
        return signInWithPopup(auth, githubProvider);
    }
    const authInfo = {
        user,
        createUser,
        loginUser,
        googleUser,
        githubUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;