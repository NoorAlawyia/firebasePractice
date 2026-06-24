
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE2eF3IkD8kMhDUxZbj9PRQ1KCtpfY4E4",
  authDomain: "practice-29396.firebaseapp.com",
  projectId: "practice-29396",
  storageBucket: "practice-29396.firebasestorage.app",
  messagingSenderId: "467760418290",
  appId: "1:467760418290:web:c88dc8472050e2656e2f6b",
  measurementId: "G-1V2GY6TL86"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




