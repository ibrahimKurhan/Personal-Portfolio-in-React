import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA0ZmQU8JcbRMgcZY3ikvD9ldaTgGUDT4",
  authDomain: "personal-website-a3fbd.firebaseapp.com",
  databaseURL: "https://personal-website-a3fbd.firebaseio.com",
  projectId: "personal-website-a3fbd",
  storageBucket: "personal-website-a3fbd.appspot.com",
  messagingSenderId: "423714530267",
  appId: "1:423714530267:web:086efb88ee9f2214ca7dfe",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};
export const firestore = firebase.firestore();

export default firebase;
