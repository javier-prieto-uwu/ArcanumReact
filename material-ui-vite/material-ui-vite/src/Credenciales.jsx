// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr8gcppK05WWP0hAcd8wTe7f_ASm7eSQg",
  authDomain: "proyectoreacarcanum.firebaseapp.com",
  projectId: "proyectoreacarcanum",
  storageBucket: "proyectoreacarcanum.firebasestorage.app",
  messagingSenderId: "633706775223",
  appId: "1:633706775223:web:443f72f564a74996170332",
  measurementId: "G-XTK3G3TNBE"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default appfirebase;