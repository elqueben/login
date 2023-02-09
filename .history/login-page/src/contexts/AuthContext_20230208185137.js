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
    function logIn(email, password) {
        return signInWithEmailAndPassword(aut)
    }

    return (
        <userAuthContext.Provider>{children}</userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext)
}