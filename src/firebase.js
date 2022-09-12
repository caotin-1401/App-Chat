import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
    apiKey: "AIzaSyAlHyaFRZlbAToFOUPYYfEo72hjaCsrQTI",
    authDomain: "chat-fee69.firebaseapp.com",
    projectId: "chat-fee69",
    storageBucket: "chat-fee69.appspot.com",
    messagingSenderId: "560947329191",
    appId: "1:560947329191:web:cf6cad47015a6a00a68382"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore()