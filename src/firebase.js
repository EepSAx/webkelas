// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW7dgnwcclbEYZ0uMq5GcZ9qwLHsuue04",
  authDomain: "web-kelas-si-003.firebaseapp.com",
  projectId: "web-kelas-si-003",
  storageBucket: "web-kelas-si-003.appspot.com",
  messagingSenderId: "627293810565",
  appId: "1:627293810565:web:fb6b9d8929ba8d7f0d5eec",
  measurementId: "G-T9XJKJC0QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();