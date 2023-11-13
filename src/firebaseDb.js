import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGEWdJ4AtM5WEnITzhnYJ79fRDaTFeRxA",
  authDomain: "subscriptions-c746a.firebaseapp.com",
  projectId: "subscriptions-c746a",
  storageBucket: "subscriptions-c746a.appspot.com",
  messagingSenderId: "655540285635",
  appId: "1:655540285635:web:9061f6b23db2776c69f276"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
