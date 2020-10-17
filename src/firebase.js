import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZFH9xliOnUspSlpBKLp9_1_LhjAk5PwI",
  authDomain: "clone-9d7eb.firebaseapp.com",
  databaseURL: "https://clone-9d7eb.firebaseio.com",
  projectId: "clone-9d7eb",
  storageBucket: "clone-9d7eb.appspot.com",
  messagingSenderId: "718855600490",
  appId: "1:718855600490:web:c32a0dd7f5d230b704cd13",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
