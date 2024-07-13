// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "moviegpt-6cb8e.firebaseapp.com",
  projectId: "moviegpt-6cb8e",
  storageBucket: "moviegpt-6cb8e.appspot.com",
  messagingSenderId: "867847345524",
  appId: "1:867847345524:web:ce9617c7a65a6de31ac821",
  measurementId: "G-LLJRBZJEEJ",
  databaseURL: "https://moviegpt-6cb8e-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getDatabase(app);
