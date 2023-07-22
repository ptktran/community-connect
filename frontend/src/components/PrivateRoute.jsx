import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useUser, useAuth } from '@clerk/clerk-react'

export default function PrivateRoute({ user, redirectPath='/landing', children }) {
  const { currentUser } = useUser()
  const { isSignedIn } = useAuth()

  if (!currentUser) {
    return <Navigate to={redirectPath} replace />
  }
  return children
  // return (
  //   <Route {...rest} 
  //     render={props => {
  //       return currentUser ? <Component {...props} /> : <Navigate to="/landing" />
  //     }}> </Route>
  // )
}