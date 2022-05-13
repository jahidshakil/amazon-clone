import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optiona
// import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDr9PPKrLSsL1bs5k-jHjUuCSyqwJD0uFA",
    authDomain: "clone-f1832.firebaseapp.com",
    projectId: "clone-f1832",
    storageBucket: "clone-f1832.appspot.com",
    messagingSenderId: "239046278022",
    appId: "1:239046278022:web:0739b887961036b25f8a07",
    measurementId: "G-NDDT2C9D6K"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };