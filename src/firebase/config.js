import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBoayDOjL9sDPkAJInxYqIPaZ4sXJpOFak",
  authDomain: "fakegram-f1709.firebaseapp.com",
  projectId: "fakegram-f1709",
  storageBucket: "fakegram-f1709.appspot.com",
  messagingSenderId: "93242615573",
  appId: "1:93242615573:web:f0a89abe857a376aa3eb1c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };