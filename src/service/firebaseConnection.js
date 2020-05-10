import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

let firebaseConfig = {
  apiKey: "AIzaSyDRJu6BoIWTxLfuxnCTW5ZMYd_w5AISarw",
  authDomain: "meuapp-8127a.firebaseapp.com",
  databaseURL: "https://meuapp-8127a.firebaseio.com",
  projectId: "meuapp-8127a",
  storageBucket: "meuapp-8127a.appspot.com",
  messagingSenderId: "68010751360",
  appId: "1:68010751360:web:1565a3e5422ee8c3f7fd65",
  measurementId: "G-8DMX86ST5G"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase;