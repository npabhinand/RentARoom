// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import {getFirestore} from "firebase/firestore"
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
let app;
if (firebase.apps.length === 0){
    app= firebase.initializeApp(firebaseConfig);
}
else {
    app=firebase.app()
}
const auth = firebase.auth()

// const analytics = getAnalytics(app);

// const firestore=getFirestore();

const db = firebase.firestore();

export {auth,db};
// db.collection("users").add({
//     userType:string,
//     email: string,
//     phone: number,
//     place: string,
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });
