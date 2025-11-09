// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD91Y0vp1ZJbbdjdd99wUZNg06zcDKshjk",
  authDomain: "food-lover-network.firebaseapp.com",
  projectId: "food-lover-network",
  storageBucket: "food-lover-network.firebasestorage.app",
  messagingSenderId: "778722505533",
  appId: "1:778722505533:web:347a102f51ba4c02a64b54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
