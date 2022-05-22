// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase.initializeApp(firebaseConfig);