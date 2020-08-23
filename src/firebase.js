import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    
        apiKey: "AIzaSyBDyZ0UbqsvmFtt7CRV28Ot2Bz99Ev2AW0",
        authDomain: "messenger-test-4f555.firebaseapp.com",
        databaseURL: "https://messenger-test-4f555.firebaseio.com",
        projectId: "messenger-test-4f555",
        storageBucket: "messenger-test-4f555.appspot.com",
        messagingSenderId: "162199118620",
        appId: "1:162199118620:web:04d4959abbeface14450d9",
        measurementId: "G-ESCVSPKH99"

});
    const db=firebaseApp.firestore();
    export default db;