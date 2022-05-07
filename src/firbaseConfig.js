// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABwnQui121RGu4GQILKmObu45L0HllS3Y",
  authDomain: "car-manager-3605f.firebaseapp.com",
  projectId: "car-manager-3605f",
  storageBucket: "car-manager-3605f.appspot.com",
  messagingSenderId: "959462170497",
  appId: "1:959462170497:web:287b614cbe1116efa61280",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
