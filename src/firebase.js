// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNpx0lo3zPdjohTGi3jsF19ghCLx7hYJU",
  authDomain: "metacare-test-1.firebaseapp.com",
  projectId: "metacare-test-1",
  storageBucket: "metacare-test-1.appspot.com",
  messagingSenderId: "816917908318",
  appId: "1:816917908318:web:98790463bdc56c2794ddcf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
