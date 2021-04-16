import { db } from './firebaseAdmin'

export async function getUser(userID) {
  const doc = await db.collection('users').doc(userID).get()
  const data = { id: doc.id, ...doc.data() }

  return { data }
}