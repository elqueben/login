import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged,
         GoogleAuthProvider,
         signInWithPopup
} from "firebase/auth"
import { auth } from "../firebase"


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState("");

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    };

    function logOut() {
        return signOut(auth);
    };

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithEmailAndPassword(auth, googleAuthProvider)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubcribe();
        }
    }, []);

    return (
        <userAuthContext.Provider value={{ user, googleSignIn, signUp, logIn, signOut }}>{children}</userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext)
}