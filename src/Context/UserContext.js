import React, { useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext(null)
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LoginWithProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const addUserInfo = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const logout = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        login,
        LoginWithProvider,
        addUserInfo,
        emailVerify,
        logout
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;