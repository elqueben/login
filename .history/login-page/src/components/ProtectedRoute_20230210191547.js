import React from 'react'
import { Navigate } from 'react-router-dom'

export function ProtectedRoute({ children }) {
  let auth = false
  if (!auth) {
    return <Navigate to="/"/>
  }
  return children
}
