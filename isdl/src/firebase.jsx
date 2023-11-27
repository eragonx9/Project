import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAkSREOOjJq4QVcXUMf06F0NIzSPRm9fpk",
  authDomain: "ecmanagement-268c3.firebaseapp.com",
  projectId: "ecmanagement-268c3",
  storageBucket: "ecmanagement-268c3.appspot.com",
  messagingSenderId: "106270166720",
  appId: "1:106270166720:web:fad9d5ab3b9b48388a2725",
  measurementId: "G-NZ39VQTE3T"
};

const app1 = initializeApp(firebaseConfig);
const auth = getAuth();

export { app1, auth };