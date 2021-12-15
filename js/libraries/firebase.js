var firebaseConfig = {
    apiKey: "AIzaSyBJNFjKaj_H7G8WSwHEO6JBDplZUJKKiWg",
    authDomain: "eailio.firebaseapp.com",
    databaseURL: "https://eailio.firebaseio.com",
    projectId: "eailio",
    storageBucket: "eailio.appspot.com",
    messagingSenderId: "677253669995",
    appId: "1:677253669995:web:8c9a16b99682e05da33d2e"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();
const storage = firebase.storage();
