import firebase from './firebase'

const firestore = firebase.firestore()

export function updateUser(uid, data) {
  return firestore.collection('users').doc(uid).update(data)
}

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true })
}

export async function getUser(uid) {
  const doc = await firestore.collection('users').doc(uid).get()
  const data = { id: doc.id, ...doc.data() }
  return { data }
}

export async function handleUserRole(uid) {
  const doc = await firestore.collection('users').doc(uid).get()
  const data = { id: doc.id, ...doc.data() }
  const role = data.role == undefined ? 'user' : data.role
  return firestore.collection('users').doc(uid).update({ role: role })
}