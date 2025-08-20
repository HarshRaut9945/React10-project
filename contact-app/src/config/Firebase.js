// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHops0XrAlzYdpoK7YJDkFBnVeLHgKjtA",
  authDomain: "vite-contact-9a25e.firebaseapp.com",
  projectId: "vite-contact-9a25e",
  storageBucket: "vite-contact-9a25e.firebasestorage.app",
  messagingSenderId: "887944067198",
  appId: "1:887944067198:web:1929f08b69e4f0a338802f",
  measurementId: "G-SE8RPDQXEM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);