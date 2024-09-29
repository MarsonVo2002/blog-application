// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-1076e.firebaseapp.com",
  projectId: "blog-1076e",
  storageBucket: "blog-1076e.appspot.com",
  messagingSenderId: "252311358415",
  appId: "1:252311358415:web:77dd3ab6323914e38fe0ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);