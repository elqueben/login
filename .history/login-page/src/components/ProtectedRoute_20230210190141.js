import React from 'react'
import { Navigate } from 'react-router-dom'

export function ProtectedRoute({ children }) {
  let auth = true
  if (!auth) {
    <Navigate to="/"/>
  }
  return children
}
