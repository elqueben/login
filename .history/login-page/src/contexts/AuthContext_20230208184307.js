import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged
} from "firebase/auth"

const userAuthContext = createContext();

export function userAuthContextProvider({ children }) {

    function

    return (
        <userAuthContext.Provider value={}>{children}</userAuthContext.Provider>
    )
}

export function userUserAuth() {
    return useContext(userAuthContext)
}