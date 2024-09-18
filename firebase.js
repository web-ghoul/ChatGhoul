// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjQD0D7Gz67LuA0MqJmU9bE6jXe8yaPZ8",
  authDomain: "chatghoul01.firebaseapp.com",
  projectId: "chatghoul01",
  storageBucket: "chatghoul01.appspot.com",
  messagingSenderId: "2083826794",
  appId: "1:2083826794:web:42f487c6b20db4ccc2ae13",
  measurementId: "G-Z7BCGXR1Q4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
