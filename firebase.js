import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASprSNwjelZjd3rExQnaybsUDorNTVc9U",
    authDomain: "rookas-medium.firebaseapp.com",
    projectId: "rookas-medium",
    storageBucket: "rookas-medium.appspot.com",
    messagingSenderId: "861574863225",
    appId: "1:861574863225:web:874d0179702775848ef7a8",
    measurementId: "G-EF76DCR6GF"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export default db;
export { auth, provider }
