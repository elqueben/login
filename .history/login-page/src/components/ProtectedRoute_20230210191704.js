import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../contexts/AuthContext'

export function ProtectedRoute({ children }) {
  let { user } = useUserAuth();
  if (!user)
  if (!auth) {
    return <Navigate to="/"/>
  }
  return children
}
