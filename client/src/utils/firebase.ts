import firebase from 'firebase'
import 'firebase/auth'

import config from 'constants/config'

const firebaseApp = firebase.initializeApp({
  apiKey: config.FIREBASE.API_KEY,
  appId: config.FIREBASE.APP_ID,
  projectId: config.FIREBASE.PROJECT_ID,
  authDomain: config.FIREBASE.AUTH_DOMAIN,
  storageBucket: config.FIREBASE.STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE.MESSAGING_SENDER_ID,
  measurementId: config.FIREBASE.MEASUREMENT_ID,
})

export default firebaseApp
