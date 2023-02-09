import React, { Children, useContext } from "react"

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ Children }) {
    const [currentUser, setCurrentUser]
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>

  )
}
