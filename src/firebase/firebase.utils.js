import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyCUCxx1famb8gq_-2zxpR2KOM1X3f9zDxs",
    authDomain: "crwn-db-89769.firebaseapp.com",
    projectId: "crwn-db-89769",
    storageBucket: "crwn-db-89769.appspot.com",
    messagingSenderId: "499841000007",
    appId: "1:499841000007:web:adacb1b77b8c140d960762",
    measurementId: "G-9PP5ZFE0TP"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;