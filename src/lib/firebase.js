
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
const firebaseConfig = {

  apiKey: "AIzaSyDaA5A4GZJBi_Vh1ASGZu9h4Yy_hk5jIWg",
  authDomain: "reactchat-f09fb.firebaseapp.com",
  projectId: "reactchat-f09fb",
  storageBucket: "reactchat-f09fb.appspot.com",
  messagingSenderId: "991380754185",
  appId: "1:991380754185:web:a2eccf9beaf1e560ab0dd8"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()