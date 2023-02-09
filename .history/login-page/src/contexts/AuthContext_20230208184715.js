import { createContext, useContext } from "react";
import { auth } from "../"
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged
} from "firebase/auth"


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