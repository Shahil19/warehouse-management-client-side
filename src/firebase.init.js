// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbCw0M32YmWK0a-WtBJEUxfaajga95hyM",
    authDomain: "shared-soft.firebaseapp.com",
    projectId: "shared-soft",
    storageBucket: "shared-soft.appspot.com",
    messagingSenderId: "443776496219",
    appId: "1:443776496219:web:78acc07ed7b30cdf3b457e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;