import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyaXSp7Tx81YIkGyQLQ-_JCRJgkygnQzk",
    authDomain: "olx-clone-7be0f.firebaseapp.com",
    projectId: "olx-clone-7be0f",
    storageBucket: "olx-clone-7be0f.appspot.com",
    messagingSenderId: "817107471715",
    appId: "1:817107471715:web:98496ddb224c493543d756",
    measurementId: "G-4DM1TRJT9K"
  };
  export default firebase.initializeApp(firebaseConfig)