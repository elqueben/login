import firebase from "firebase/app"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCt83hy9ZK-hO7V7gp7I9dIsoD_CAS4dIA",
  authDomain: "login-test-58311.firebaseapp.com",
  projectId: "login-test-58311",
  storageBucket: "login-test-58311.appspot.com",
  messagingSenderId: "794719420820",
  appId: "1:794719420820:web:72abc54e2b3e0709830f81",
  measurementId: "G-SHD41PDC48"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export app