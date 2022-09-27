import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZK6iL0iN4LlcBEaRiwbeLP_uAitoMe1s",
  authDomain: "lolos-ecommerce-fb-prueba.firebaseapp.com",
  projectId: "lolos-ecommerce-fb-prueba",
  storageBucket: "lolos-ecommerce-fb-prueba.appspot.com",
  messagingSenderId: "65038335332",
  appId: "1:65038335332:web:696aacf236a5b61df80e71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
