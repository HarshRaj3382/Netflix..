

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAtlg-W2QGegvAV_kYqQrJYRptAPcKvkk",
  authDomain: "netflix-gpt-5edbd.firebaseapp.com",
  projectId: "netflix-gpt-5edbd",
  storageBucket: "netflix-gpt-5edbd.appspot.com", // ✅ Corrected
  messagingSenderId: "1006385598547",
  appId: "1:1006385598547:web:5fc771f32dabee5387b6a6",
  measurementId: "G-WSS5LYKXXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();

// Export Firebase services
export { app, auth, db, storage, googleProvider };





/*
for userjpur
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOqO-Zm_9JfCQ2c_kyqo7oQXuRcsCA68g",
  authDomain: "netflix-479b9.firebaseapp.com",
  projectId: "netflix-479b9",
  storageBucket: "netflix-479b9.firebasestorage.app",
  messagingSenderId: "279943612218",
  appId: "1:279943612218:web:4b46d808f17d6883907203",
  measurementId: "G-XQ5GDDVE4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
