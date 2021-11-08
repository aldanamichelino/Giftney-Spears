import React, { createContext, useState, useEffect } from 'react';
import { getAuth, provider } from '../firebase/config';

export const UserAuthContext = createContext();

export const UserAuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const auth = getAuth();

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
       return auth.signOut();
    }

    const loginWithGoogle = () => {
        return auth.signInWithPopup(provider);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
        return () => {
            unsubscribe();
        }
    }, [auth]);

    useEffect(() => {
        if(currentUser){
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [currentUser]);

    return (
        <UserAuthContext.Provider value={{isAuthenticated, setIsAuthenticated, currentUser, setCurrentUser, signUp, login, loginWithGoogle, logout}} >
            {children}
        </UserAuthContext.Provider>
    )
}