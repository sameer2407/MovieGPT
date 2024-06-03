// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "moviegpt-6cb8e.firebaseapp.com",
  projectId: "moviegpt-6cb8e",
  storageBucket: "moviegpt-6cb8e.appspot.com",
  messagingSenderId: "867847345524",
  appId: "1:867847345524:web:ce9617c7a65a6de31ac821",
  measurementId: "G-LLJRBZJEEJ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
