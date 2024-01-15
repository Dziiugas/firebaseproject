import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9eGs76cOJ-cdZexlsw_KK7voFkhqoFGY",
  authDomain: "project-9b4a1.firebaseapp.com",
  projectId: "project-9b4a1",
  storageBucket: "project-9b4a1.appspot.com",
  messagingSenderId: "640785027160",
  appId: "1:640785027160:web:ef144d4076a504988cfa2d",
  measurementId: "G-66LKZECQTP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase

export{
    app
}