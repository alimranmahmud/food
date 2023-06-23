import React, { createContext, useEffect, useState } from 'react';
import { app } from './Firbase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const ContextProvider = createContext()
const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [users, setUsers] = useState(null)
    const [loadding, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()
    //google
    const googleSingin = () => {
        return signInWithPopup(auth, provider)
    }
    //emailPasswordCreate
    const createEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //logIn
    const login = (email, passowrd) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, passowrd)
    }
    //logOut
    const logout = () => {
        return signOut(auth)

    }
    //userDetails
    useEffect(() => {
        const unsebcribe = onAuthStateChanged(auth, (Currentuser) => {

            console.log('current user inside state change', Currentuser)
            setUsers(Currentuser)
            setLoading(false)
        })
        return () => unsebcribe()
    }, [])

    const authInfo = { googleSingin, createEmailPassword, loadding, logout, login, users }
    return (
        <div>
            <ContextProvider.Provider value={authInfo}>
                {children}
            </ContextProvider.Provider>
        </div>
    );
};

export default AuthContext;