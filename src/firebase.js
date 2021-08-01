import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Lzdbs4eRy_34emEP_bjdM0oO96pzW8A",
  authDomain: "linkedin-clone-1632b.firebaseapp.com",
  projectId: "linkedin-clone-1632b",
  storageBucket: "linkedin-clone-1632b.appspot.com",
  messagingSenderId: "378554335301",
  appId: "1:378554335301:web:3e12137d4aed543878a32c",
  measurementId: "G-VXN4BEWRGE",
};

// connecting to the firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//get access to our variable inside db
const db = firebaseApp.firestore();

//authentication
const auth = firebase.auth();

export { db, auth };
