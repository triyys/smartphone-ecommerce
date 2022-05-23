import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB0ROuSF90DEOgf-UzMzsVddMVcc3jekp0",
  authDomain: "smartphone-store-ecommerce.firebaseapp.com",
  projectId: "smartphone-store-ecommerce",
  storageBucket: "smartphone-store-ecommerce.appspot.com",
  messagingSenderId: "668341404017",
  appId: "1:668341404017:web:764651f03e49e7b27db6d0",
  measurementId: "G-FSPTGNTZ3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);