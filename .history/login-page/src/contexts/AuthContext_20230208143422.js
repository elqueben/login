import React, { Children } from "react"

const AuthContext = React.createContext();


export default function AuthProvider() {
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>

  )
}
