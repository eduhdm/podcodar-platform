import React, { useEffect, useState, useContext } from 'react'
import type firebase from 'firebase'
import firebaseApp from 'utils'

export const AuthContext = React.createContext({} as { user: firebase.User | null })

export const AuthProvider = ({ children }): JSX.Element => {
  const [currentUser, setCurrentUser] = useState({} as { user: firebase.User | null })

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((firebaseUser) => {
      setCurrentUser({ user: firebaseUser })
    })
  }, [])

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
}

export const useAuthProvider = () => useContext(AuthContext)
