// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeKZQZ4eTQZKKTRkJnoTCWgBZZjphhbsw",
    authDomain: "assignment-nine-login.firebaseapp.com",
    projectId: "assignment-nine-login",
    storageBucket: "assignment-nine-login.appspot.com",
    messagingSenderId: "804958225622",
    appId: "1:804958225622:web:51d82ffd7361e315acb577"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;