import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6rl1_kwpjiHedq7oT43gOBkeM24RZNH4",
  authDomain: "tricohack2025.firebaseapp.com",
  databaseURL: "https://tricohack2025-default-rtdb.firebaseio.com",
  projectId: "tricohack2025",
  storageBucket: "tricohack2025.firebasestorage.app",
  messagingSenderId: "489820158523",
  appId: "1:489820158523:web:b412b982e216a57f1aba1e",
  measurementId: "G-42RCL0JFKF"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const auth = getAuth(app);

export { db };
