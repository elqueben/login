import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword,
        
} from "firebase/auth"

const userAuthContext = createContext();

export function userAuthContextProvider({ children }) {
    return (
        <userAuthContext.Provider value={}>{children}</userAuthContext.Provider>
    )
}

export function userUserAuth() {
    return useContext(userAuthContext)
}