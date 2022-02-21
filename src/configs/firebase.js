import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJo-VqtdRWzXMIZvZbFV9m-jGMDNpP4nw",
    authDomain: "imoney-96ad0.firebaseapp.com",
    projectId: "imoney-96ad0",
    storageBucket: "imoney-96ad0.appspot.com",
    messagingSenderId: "931357155566",
    appId: "1:931357155566:web:3379a55e8902595322d3ff",
    measurementId: "G-7C8G6X1MGQ"
  };

  firebase.initializeApp(firebaseConfig);

  const fireStoreCore = firebase.firestore();
  
  export {fireStoreCore };