import React, { Children, useContext, useEffect, useState } from "react"
import { auth } from "../firebase"
import useAuth from "../contexts/A"

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ Children }) {

    const [currentUser, setCurrentUser] = useState();

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            })
        return unsubcribe
    }, [])

    const value = {
        currentUser,
        signUp
    }

  return (
    <AuthContext.Provider value={value}>
        {Children}
    </AuthContext.Provider>

  )
}
