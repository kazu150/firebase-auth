import React, { useEffect, useState } from 'react';
import { app } from '../base';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    const login = async (email, password, history) => {
        try {
            await app.auth().signInWithEmailAndPassword(email, password);
            history.push('/');
        } catch(error) {
            alert(error);
        }
    };

    const signup = async (email, password, history) => {
        try {
            await app.auth().createUserWithEmailAndPassword(email, password);
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }

    useEffect(()=> {
        // app.auth().onAuthStateChanged(setCurrentUser); //TODO 下記のように書くのと同義？
        app.auth().onAuthStateChanged(user => setCurrentUser(user));
    }, []);

    return (
        <AuthContext.Provider
            value={{
                login: login,
                signup: signup,
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};