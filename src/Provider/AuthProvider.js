import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';


export const AuthContex = createContext()
const auth = getAuth()
const AuthProvider = ({ children }) => {



    const authInfo = {}

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;