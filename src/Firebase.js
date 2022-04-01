// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb_LQnBPT4SOSa9YBDHuhHPNfaaHcPMSs",
  authDomain: "e-commerce-ae1b0.firebaseapp.com",
  projectId: "e-commerce-ae1b0",
  storageBucket: "e-commerce-ae1b0.appspot.com",
  messagingSenderId: "239042207914",
  appId: "1:239042207914:web:e1607e69ad3c97f53d30d3",
  measurementId: "G-GRCQGYG4L4",
  databaseURL:'gs://e-commerce-ae1b0.appspot.com/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dashboardDb = getFirestore(app);
export const usersCollection = getFirestore(app);
export const productsCollection = getFirestore(app);
export const sellsCollection = getFirestore(app)
export const storage = getStorage(app);
export default app;