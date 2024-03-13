import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);
    const provider = new GoogleAuthProvider();

    // sign up a user account 
    const createUserAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login a user account
    const loginUserAccount = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // get user information with onStateChange
    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
          
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else{
                localStorage.removeItem('access-token'); 
            }
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }

    },[axiosPublic])

    // signIn with google provider

    const signInWithGoogleProvider = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // sign Out user from anywhere

    const logOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }
    

    const authInfo = {
        user,
        loading,
        createUserAccount,
        loginUserAccount,
        signInWithGoogleProvider,
        logOutUser,
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