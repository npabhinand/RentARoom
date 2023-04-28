// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// import { getAnalytics } from "firebase/analytics";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbAtMALpsFLnUL8SYN0sqKTfmNQmLzU8U",
  authDomain: "rentaroom-a8068.firebaseapp.com",
  projectId: "rentaroom-a8068",
  storageBucket: "rentaroom-a8068.appspot.com",
  messagingSenderId: "874123900753",
  appId: "1:874123900753:web:bf34b8d4010addf7230570",
  measurementId: "G-XQGWGJ4FRB"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// const storage = getStorage(app);
const auth = firebase.auth()
const db = firebase.firestore();

export { db,auth };
export default firebase;