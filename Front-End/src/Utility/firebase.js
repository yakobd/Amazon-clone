// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJry9mdG-82pi-JFSDyHTBl-WSS4HCuL0",
  authDomain: "e-clone-98a72.firebaseapp.com",
  projectId: "e-clone-98a72",
  storageBucket: "e-clone-98a72.appspot.com",
  messagingSenderId: "158717374710",
  appId: "1:158717374710:web:e82b9d41093a2013233cd7",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
