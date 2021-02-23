import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCAeTd5BxR_VgM6OKDDZGPbx5pzKbSbDwU",
  authDomain: "tiktok-clone-98da3.firebaseapp.com",
  projectId: "tiktok-clone-98da3",
  storageBucket: "tiktok-clone-98da3.appspot.com",
  messagingSenderId: "320376528828",
  appId: "1:320376528828:web:1e56ea2a68325481bd95b9",
  measurementId: "G-P64WQ916WK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
