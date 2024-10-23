// Import the required Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyDCgw1LCLl4oq3MhTpkiwsfKxbfyxJnK_w",
  authDomain: "ittalearn.firebaseapp.com",
  projectId: "ittalearn",
  storageBucket: "ittalearn.appspot.com",
  messagingSenderId: "31578164428",
  appId: "1:31578164428:web:62251dab3056f93f574669",
  measurementId: "G-FCQL0LCZXB",
  databaseURL: "https://ittalearn-default-rtdb.firebaseio.com", 
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
