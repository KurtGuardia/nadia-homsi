// Import the functions you need from the SDKs you need
import {
  initializeApp,
  getApps,
  getApp,
} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
// IMPORTANT: Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
}

// Initialize Firebase
let app
if (!getApps().length) {
  app = initializeApp(firebaseConfig)
} else {
  app = getApp()
}

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
