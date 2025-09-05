// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "food-app-c5d80.firebaseapp.com",
  projectId: "food-app-c5d80",
  storageBucket: "food-app-c5d80.firebasestorage.app",
  messagingSenderId: "185328634419",
  appId: "1:185328634419:web:3c4e4f37c96afb20333146",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
