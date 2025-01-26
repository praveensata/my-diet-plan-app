// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByGvLgPtXzHhh-d8_G_6TxW4oYWIQ9u10",
  authDomain: "diet-plan-ef8c4.firebaseapp.com",
  databaseURL: "https://diet-plan-ef8c4-default-rtdb.firebaseio.com",
  projectId: "diet-plan-ef8c4",
  storageBucket: "diet-plan-ef8c4.firebasestorage.app",
  messagingSenderId: "816477650134",
  appId: "1:816477650134:web:4f50b1c25e41fa04f55d77",
  measurementId: "G-L2VZHX29DZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);