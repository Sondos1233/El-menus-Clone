import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import firebase from "./firebase";
import "firebase/firestore"

//==================================Main CDN========================================

const firebaseConfig = {
  apiKey: "AIzaSyC0-XXmwY_ScpXq_VJxPvwTjXQ_r0jcF18",
  authDomain: "elmenusclone.firebaseapp.com",
  databaseURL: "https://elmenusclone-default-rtdb.firebaseio.com",
  projectId: "elmenusclone",
  storageBucket: "elmenusclone.appspot.com",
  messagingSenderId: "57271621220",
  appId: "1:57271621220:web:ff707ce3b18b1b76db7171",
  measurementId: "G-GT1JVN96RD"
  };

//==================================Test CDN========================================
//  const firebaseConfig = {
//   apiKey: "AIzaSyC-5jGgvrgiCrq1lMJId4RwNJYAEg43DJY",
//   authDomain: "authentication-test-33755.firebaseapp.com",
//   projectId: "authentication-test-33755",
//   storageBucket: "authentication-test-33755.appspot.com",
//   messagingSenderId: "379055240396",
//   appId: "1:379055240396:web:e6dd73c5bbc567f5df3e69",
//   measurementId: "G-4FYS3B5EQF"
// };
  
const app =initializeApp(firebaseConfig);
const db = getFirestore(app)
  
export default db;