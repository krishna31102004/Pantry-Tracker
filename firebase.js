// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeamAl6HVDWiGJqCEqvFwK3_9N4fDN8vA",
  authDomain: "pantry-tracker-a4411.firebaseapp.com",
  projectId: "pantry-tracker-a4411",
  storageBucket: "pantry-tracker-a4411.appspot.com",
  messagingSenderId: "853900482405",
  appId: "1:853900482405:web:3ad67363e77201ceb0738c",
  measurementId: "G-ES0JBSCMDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };