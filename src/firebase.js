// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Api key can't be used maliciously !!
const firebaseConfig = {
  apiKey: "AIzaSyBDsnJcweSShL6n4XyiPgZWz32c-Lf860M",
  authDomain: "conference-f7660.firebaseapp.com",
  projectId: "conference-f7660",
  storageBucket: "conference-f7660.appspot.com",
  messagingSenderId: "1077737816279",
  appId: "1:1077737816279:web:8c360c3b203a27004db092",
  measurementId: "G-X3RS0NK9H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;