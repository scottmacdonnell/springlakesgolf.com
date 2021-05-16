import admin from 'firebase-admin'

const adminConfig = {
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig)
  })
}

const db = admin.firestore()
const auth = admin.auth()

export { db, auth }