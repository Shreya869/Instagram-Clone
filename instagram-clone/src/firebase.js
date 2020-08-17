import 'firebase/storage';
import firebase from 'firebase/app';


  import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDsoS83P_ltGNZprVTcAMvMnko2Elo9Jek",
    authDomain: "instagram-clone-react-fe0ed.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-fe0ed.firebaseio.com",
    projectId: "instagram-clone-react-fe0ed",
    storageBucket: "instagram-clone-react-fe0ed.appspot.com",
    messagingSenderId: "909000109110",
    appId: "1:909000109110:web:4033d568568ac3479b7c97",
    measurementId: "G-EM7T27Y78V"


  });
const db= firebaseApp.firestore();
const auth = firebase.auth();
const storage= firebase.storage();

export {db, auth, storage};