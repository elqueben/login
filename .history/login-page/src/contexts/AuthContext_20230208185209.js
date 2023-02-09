import { createContext, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged
} from "firebase/auth"
import { auth } from "../firebase"


const userAuthContext = createContext();

export function userAuthContextProvider({ children }) {

    function signUp(auth, email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {})

    return (
        <userAuthContext.Provider>{children}</userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext)
}