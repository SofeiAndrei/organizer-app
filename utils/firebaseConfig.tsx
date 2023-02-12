import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDeiXvfbJ1SmYwVfzzK179OOY24NakJsWA",
    authDomain: "organizer-80f7e.firebaseapp.com",
    projectId: "organizer-80f7e",
    storageBucket: "organizer-80f7e.appspot.com",
    messagingSenderId: "1032231470386",
    appId: "1:1032231470386:web:5a910cbcf8cb73ff94432b",
    measurementId: "G-7WJZRXRSVC"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore()
const auth = getAuth(app);

export {firestore, auth}