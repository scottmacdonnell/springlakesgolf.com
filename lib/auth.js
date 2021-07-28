import { useState, useEffect, useContext, createContext } from 'react'
import Router from 'next/router'

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
      setUser({
        email: user.email !== null ? user.email : '',
        name: user.name !== null ? user.name : '',
        photoUrl: user.photoUrl !== null ? user.photoUrl : '',
        provider: user.provider !== null ? user.provider : '',
        role: user.role !== null ? user.role : '',
        uid: user.uid !== null ? user.uid : '',
      })
      console.log(user)
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
      .then((response) => {
        handleUser(response.user)
        Router.push('/member/dashboard')
      })
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user)
        Router.push('/member/dashboard')
      })
  }

  const signInWithTwitter = () => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then((response) => {
        handleUser(response.user)
        Router.push('/member/dashboard')
      })
  }

  const createUserWithEmailAndPassword = (email, password) => {
    setLoading(true)
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user)
        Router.push('/member/dashboard')
      })
  }

  const signInWithEmailAndPassword = (email, password) => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user)
        Router.push('/member/dashboard')
      })
  }

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(false)
        Router.push('/')
      })
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
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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