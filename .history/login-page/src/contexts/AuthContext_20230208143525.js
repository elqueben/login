import React, { Children, useContext, useState } from "react"

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ Children }) {
    const [currentUser, setCurrentUser] = useState()
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>

  )
}
