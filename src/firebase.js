// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Auth, GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaPvYhtcGAcEFqDrHRbIOyH1EGvZKeBgw",
    authDomain: "listedassign-7af3f.firebaseapp.com",
    projectId: "listedassign-7af3f",
    storageBucket: "listedassign-7af3f.appspot.com",
    messagingSenderId: "544762025763",
    appId: "1:544762025763:web:7020d35916b949c8edde96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();