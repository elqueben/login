import React, { Children, useContext, useState } from "react"
import { auth } from "../firebase"

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ Children }) {

    const [currentUser, setCurrentUser] = useState();

    function signUp(email, password){
        return auth.createUserWithEmail
    }

    const value = {
        currentUser
    }

  return (
    <AuthContext.Provider value={value}>
        {Children}
    </AuthContext.Provider>

  )
}
