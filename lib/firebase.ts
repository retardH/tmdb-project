import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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
