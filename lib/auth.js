import React, { useState, useEffect, useContext, createContext } from 'react'

import firebase from './firebase'
import { createUser, getUser, handleUserRole } from './firestore'

const authContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser)
      createUser(user.uid, user)
      await handleUserRole(user.uid)
      const dbUser = await getUser(user.uid)
      user.role = dbUser.data.role
      setUser(user)
      setLoading(false)
      return user
    } else {
      setUser(false)
      setLoading(false)
      return false
    }
  }

  const signInWithFacebook = () => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((response) => handleUser(response.user))
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => handleUser(response.user))
  }

  const signInWithTwitter = () => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then((response) => handleUser(response.user))
  }

  const signInWithEmail = (email, password) => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => handleUser(response.user))
  }

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false))
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser)
    return () => unsubscribe()
  }, [])

  return {
    user,
    loading,
    signInWithFacebook,
    signInWithGoogle,
    signInWithTwitter,
    signInWithEmail,
    signOut
  }
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  }
}