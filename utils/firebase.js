import firebase from "firebase/compat/app";
import { getStorage } from "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/storage"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwEp_joaHvMuMzB3ozXMaPGgi7yckp6ro",
  authDomain: "peppy-house-332409.firebaseapp.com",
  projectId: "peppy-house-332409",
  storageBucket: "peppy-house-332409.appspot.com",
  messagingSenderId: "597287452861",
  appId: "1:597287452861:web:dd1ee778552634ddaa77d4",
  measurementId: "G-E9PSXFXMG4",
};

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (error) {
    console.log("Firebase app initialization error", error.stack);
  }
} 

const firestore = firebase.firestore();
const storage = firebase.storage().ref();

// const storageRef = ref(storage);

export { firestore, storage };
