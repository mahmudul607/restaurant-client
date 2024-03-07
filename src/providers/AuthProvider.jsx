import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);
    const provider = new GoogleAuthProvider();

    // sign up a user account 
    const createAccountWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login a user account
    const signInAccountWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // get user information with onStateChange
    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }

    },[])

    // signIn with google provider

    const signInWithGoogleProvider = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    

    const authInfo = {
        user,
        loading,
        createAccountWithEmailAndPassword,
        signInAccountWithEmailAndPassword,
        signInWithGoogleProvider,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;