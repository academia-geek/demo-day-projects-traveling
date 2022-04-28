import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCkzYy-rxXmBBIN1uLYBSAFZuGYX_K4qhI",
    authDomain: "traveling-proyect.firebaseapp.com",
    projectId: "traveling-proyect",
    storageBucket: "traveling-proyect.appspot.com",
    messagingSenderId: "886811118756",
    appId: "1:886811118756:web:1b8adbd73bf080bcbcea31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const dataBase = getFirestore()

export { app, google, facebook, dataBase }

// Para desplegar, en la consola escribir:
// firebase login
// firebase init
// firebase deploy