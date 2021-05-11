import { db } from './firebaseAdmin'

export async function getUser(userID) {
  const doc = await db.collection('users').doc(userID).get()
  const data = { id: doc.id, ...doc.data() }

  return { data }
}

export const getCode = async () => {
  const doc = await db.collection('data').doc('membercode').get()
  const data = { code: doc.code, ...doc.data() }

  return { data }
}