import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNA1YP36M_poMWLNv-xO6kBuB6HNxk4i4",
  authDomain: "netflix-clone-46b18.firebaseapp.com",
  projectId: "netflix-clone-46b18",
  storageBucket: "netflix-clone-46b18.appspot.com",
  messagingSenderId: "276270745328",
  appId: "1:276270745328:web:2a24bd6b7577d446f1a435",
};

// Use this to initialize the firebase App

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
