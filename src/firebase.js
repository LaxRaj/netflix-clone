import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHibzFVgOeV8SeSo1lvj2HOQzMUXnPzeQ",
  authDomain: "netflix-d5aee.firebaseapp.com",
  projectId: "netflix-d5aee",
  storageBucket: "netflix-d5aee.appspot.com",
  messagingSenderId: "825912496017",
  appId: "1:825912496017:web:204dad2b52fb71c55e1430"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;