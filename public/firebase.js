import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByGvLgPtXzHhh-d8_G_6TxW4oYWIQ9u10",
  authDomain: "diet-plan-ef8c4.firebaseapp.com",
  projectId: "diet-plan-ef8c4",
  storageBucket: "diet-plan-ef8c4.appspot.com",
  messagingSenderId: "816477650134",
  appId: "1:816477650134:web:4f50b1c25e41fa04f55d77",
  measurementId: "G-L2VZHX29DZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
