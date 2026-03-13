// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration (from your Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyAavR1YHvJKSUsJZBB6AH1PW7X6mVUNToY",
  authDomain: "beauty-parlor-5e0ff.firebaseapp.com",
  projectId: "beauty-parlor-5e0ff",
  storageBucket: "beauty-parlor-5e0ff.appspot.com",
  messagingSenderId: "589704894487",
  appId: "1:589704894487:web:10cef4c9a9c008b4306452",
  measurementId: "G-QC014VG48Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
export const db = getFirestore(app);

// Initialize Authentication (for login/register)
export const auth = getAuth(app);

// Optional: analytics
export const analytics = getAnalytics(app);

export default app;

