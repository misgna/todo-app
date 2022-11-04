// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp2-okM_KjP2TEWBUGUONhBuL0PYDc4A8",
  authDomain: "todo-app-7e401.firebaseapp.com",
  databaseURL: "https://todo-app-7e401-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-app-7e401",
  storageBucket: "todo-app-7e401.appspot.com",
  messagingSenderId: "399564544223",
  appId: "1:399564544223:web:819a906e694594d9e0716a"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }
