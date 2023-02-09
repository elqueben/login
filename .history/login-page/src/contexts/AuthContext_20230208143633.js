import React, { Children, useContext, useState } from "react"
import { auth }

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ Children }) {

    const [currentUser, setCurrentUser] = useState();

    const value = {
        currentUser
    }

  return (
    <AuthContext.Provider value={value}>
        {Children}
    </AuthContext.Provider>

  )
}
