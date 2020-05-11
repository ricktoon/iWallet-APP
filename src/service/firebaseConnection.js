import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

let firebaseConfig = {
  apiKey: "AIzaSyB2x09hNC8xTi5fAMiSV9d2uI3dDn56C94",
  authDomain: "carteiraapp.firebaseapp.com",
  databaseURL: "https://carteiraapp.firebaseio.com",
  projectId: "carteiraapp",
  storageBucket: "carteiraapp.appspot.com",
  messagingSenderId: "885499746946",
  appId: "1:885499746946:web:89b491a2eea07a13a4329b",
  measurementId: "G-4EVQW7CY92"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase;