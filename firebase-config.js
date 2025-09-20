// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBe4HVrHFPT89A-vNSjGBQuE8tUfjjfe3k",
  authDomain: "akela-ai.firebaseapp.com",
  databaseURL: "https://akela-ai-default-rtdb.firebaseio.com",
  projectId: "akela-ai",
  storageBucket: "akela-ai.firebasestorage.app",
  messagingSenderId: "321061441809",
  appId: "1:321061441809:web:e03bee71b0f5a916f77cb0",
  measurementId: "G-QE29041QJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };
