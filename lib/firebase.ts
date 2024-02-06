// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCP4p1r_EBaSD1TK_x7fUEL1N_eSRo088Q',
  authDomain: 'movie-project-b0cf6.firebaseapp.com',
  projectId: 'movie-project-b0cf6',
  storageBucket: 'movie-project-b0cf6.appspot.com',
  messagingSenderId: '497943043970',
  appId: '1:497943043970:web:f4cf22493a87b1ae0db99b',
  measurementId: 'G-CDM50BNNPS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
