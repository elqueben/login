import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged
} from "firebase/auth"
import { auth } from "../firebase"


const userAuthContext = createContext();

export function userAuthContextProvider({ children }) {

    function signUp(auth, email, password) {
        return createUserWithEmailAndPassword
    }

    return (
        <userAuthContext.Provider value={}>{children}</userAuthContext.Provider>
    )
}

export function userUserAuth() {
    return useContext(userAuthContext)
}