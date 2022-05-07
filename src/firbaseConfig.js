// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk8fbSH_63co7Al64CK3Oyz0mXA3DRik4",
  authDomain: "car-manager-e5d34.firebaseapp.com",
  projectId: "car-manager-e5d34",
  storageBucket: "car-manager-e5d34.appspot.com",
  messagingSenderId: "849276342562",
  appId: "1:849276342562:web:f6c0a714197b178807d57b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
