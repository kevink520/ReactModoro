import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "",
  authDomain: "reactmodoro-a5eb7.firebaseapp.com",
  databaseURL: "https://reactmodoro-a5eb7.firebaseio.com",
  storageBucket: "reactmodoro-a5eb7.appspot.com",
  messagingSenderId: "971297467882"
});

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth()
const facebookProvider = firebase.auth.FacebookAuthProvider

export {
  ref,
  firebaseAuth,
  facebookProvider,
}
