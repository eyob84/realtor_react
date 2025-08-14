// Import the functions you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Realtime DB
import { getAuth } from "firebase/auth"; // Auth (optional, for rules)
import { getStorage } from "firebase/storage"; // Storage

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDdgnOiN07OP0XTY-lSmynqgbzu3ccLFEk",
  authDomain: "whatsapp-2ac47.firebaseapp.com",
  databaseURL: "https://whatsapp-2ac47-default-rtdb.firebaseio.com/",
  projectId: "whatsapp-2ac47",
  storageBucket: "whatsapp-2ac47.appspot.com",
  messagingSenderId: "747308266398",
  appId: "1:747308266398:web:70b7c40c98ba9ae245dc8f",
  measurementId: "G-DKHCMQGZ3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init services
export const db = getDatabase(app);   // Realtime Database
export const auth = getAuth(app);     // Authentication
export const storage = getStorage(app); // Storage
