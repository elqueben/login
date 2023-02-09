import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged
} from "firebase/auth"
import { auth } from "../firebase"


const userAuthContext = createContext();

export function userAuthContextProvider({ children }) {

    const [user, setUser] = useState("")

    function signUp(auth, email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        
    }, []);

    return (
        <userAuthContext.Provider>{children}</userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext)
}