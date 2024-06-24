// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA7jGej7mk9EvC2HiJeLW5w4WbUfhG86o",
  authDomain: "react-course-405dc.firebaseapp.com",
  projectId: "react-course-405dc",
  storageBucket: "react-course-405dc.appspot.com",
  messagingSenderId: "501859145236",
  appId: "1:501859145236:web:76a7dbfe7bf3f03a26f901",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
