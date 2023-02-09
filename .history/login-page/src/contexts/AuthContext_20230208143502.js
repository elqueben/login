import React, { Children, useContext } from "react"

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({Children }) {
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>

  )
}
