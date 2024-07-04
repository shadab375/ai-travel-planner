// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD4lTxJMmZMINUQxMqrHd5ebN9U6NUqyU",
  authDomain: "ai-travel-planner-a1c26.firebaseapp.com",
  projectId: "ai-travel-planner-a1c26",
  storageBucket: "ai-travel-planner-a1c26.appspot.com",
  messagingSenderId: "231697031364",
  appId: "1:231697031364:web:6f6ed2686a285f1f5ea991",
  measurementId: "G-9ZEGJ917F6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);