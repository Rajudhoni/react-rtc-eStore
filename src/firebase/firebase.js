import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEnYKVecmxSWUYUXN4ZcbD27TJF72FUBk",
  authDomain: "rtc-estore.firebaseapp.com",
  databaseURL: "https://rtc-estore.firebaseio.com",
  projectId: "rtc-estore",
  storageBucket: "rtc-estore.appspot.com",
  messagingSenderId: "710180917405",
  appId: "1:710180917405:web:7c422400c6a02d2257c474"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;