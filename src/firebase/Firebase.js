import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAZI-_OnlmHnHe2HOJJET5yIjjsAJlvMGY",
  authDomain: "calendly-cw-5.firebaseapp.com",
  projectId: "calendly-cw-5",
  storageBucket: "calendly-cw-5.appspot.com",
  messagingSenderId: "1013888036823",
  appId: "1:1013888036823:web:a864844825031237642592"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);