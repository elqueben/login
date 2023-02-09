// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt83hy9ZK-hO7V7gp7I9dIsoD_CAS4dIA",
  authDomain: "login-test-58311.firebaseapp.com",
  projectId: "login-test-58311",
  storageBucket: "login-test-58311.appspot.com",
  messagingSenderId: "794719420820",
  appId: "1:794719420820:web:72abc54e2b3e0709830f81",
  measurementId: "G-SHD41PDC48"
};

// Initialize Firebase
const auth = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);