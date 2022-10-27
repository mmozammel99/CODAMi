import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    
    const [dark, setDark] = useState((JSON.parse(localStorage.getItem('mod')))||false);

  
    localStorage.setItem('mod',(dark))

    


    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const login = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const LoginWithProvider = (provider) => {
        return signInWithPopup(auth, provider);
    };

    const addUserInfo = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    };
    const logout = () => {
        setLoader(true);
        return signOut(auth);
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {
        user,
        createUser,
        login,
        LoginWithProvider,
        addUserInfo,
        emailVerify,
        logout,
        loader,
        setLoader,
        dark,
        setDark
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;