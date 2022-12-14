import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';



export const AuthContext= createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState();


    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn =(email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = ()=>{
        setLoading(false);
        return signOut(auth)
    }


    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user inside the state', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    } , [])


    const authInfo ={user,loading, providerLogin, logOut, createUser, signIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
    

};

export default AuthProvider;