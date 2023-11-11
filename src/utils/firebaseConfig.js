// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiUhPB9bDzNswfXeUMydupfL9caIQ2-NQ",
  authDomain: "pushandpull-f8b9f.firebaseapp.com",
  projectId: "pushandpull-f8b9f",
  storageBucket: "pushandpull-f8b9f.appspot.com",
  messagingSenderId: "863709647535",
  appId: "1:863709647535:web:5809fa001f8b89bb593a5a",
  measurementId: "G-1NBKK8TQ2F",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
