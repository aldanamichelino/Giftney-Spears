import React, { createContext, useState } from 'react';
import { getAuth } from '../firebase/config';

export const UserAuthContext = createContext();

export const UserAuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const auth = getAuth();

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const value = {
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentUser,
        login
    }

    return (
        <UserAuthContext.Provider value={{value}} >
            {children}
        </UserAuthContext.Provider>
    )
}