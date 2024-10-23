// Import the required Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore for database
import { getDatabase } from "firebase/database"; // Realtime Database

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCgw1LCLl4oq3MhTpkiwsfKxbfyxJnK_w",
  authDomain: "ittalearn.firebaseapp.com",
  projectId: "ittalearn",
  storageBucket: "ittalearn.appspot.com",
  messagingSenderId: "31578164428",
  appId: "1:31578164428:web:62251dab3056f93f574669",
  measurementId: "G-FCQL0LCZXB",
  databaseURL: "https://ittalearn-default-rtdb.firebaseio.com", // Add the Realtime DB UR1L
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firestore Database
export const firestore = getFirestore(app);

// Realtime Database
export const db = getDatabase(app); 

// Firebase Authentication
export const auth = getAuth(app);

// Google Authentication Provider
export const googleProvider = new GoogleAuthProvider();

