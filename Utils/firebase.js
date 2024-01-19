// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIYGYP5DrlfHbQzVMU3gmrShkuWbY_RRU",
  authDomain: "portfolio-53487.firebaseapp.com",
  projectId: "portfolio-53487",
  storageBucket: "portfolio-53487.appspot.com",
  messagingSenderId: "838130007785",
  appId: "1:838130007785:web:cca261a19677b57f943a78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {
  app,

}