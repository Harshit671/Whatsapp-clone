import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyCQfKPv3bXnLkaoauhiRgxZFDhMwhr0M18",
  authDomain: "whatsapp-clone-3058d.firebaseapp.com",
  projectId: "whatsapp-clone-3058d",
  storageBucket: "whatsapp-clone-3058d.appspot.com",
  messagingSenderId: "34776590039",
  appId: "1:34776590039:web:7a992504f5cb9d86173292",
  measurementId: "G-NQMB8Z2CKL"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
