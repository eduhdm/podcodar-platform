import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'

import App from './App'
import * as serviceWorker from './serviceWorker'
import constants from './constants'

const { config } = constants

firebase.initializeApp({
  apiKey: config.FIREBASE.API_KEY,
  appId: config.FIREBASE.APP_ID,
  projectId: config.FIREBASE.PROJECT_ID,
  authDomain: config.FIREBASE.AUTH_DOMAIN,
  storageBucket: config.FIREBASE.STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE.MESSAGING_SENDER_ID,
  measurementId: config.FIREBASE.MEASUREMENT_ID,
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // eslint-disable-line
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
