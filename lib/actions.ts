// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { db } from './firebase';

// export const getCurrentUser = async (id: any) => {
//   const docRef = doc(db, 'user', id);
//   const docSnap = await getDoc(docRef);
//   if (docSnap.exists()) {
//     return docSnap.data();
//   }
// };

// export const storeCurrentUser = async (user: any) => {
//   await setDoc(doc(db, 'user', user.id), {
//     username: user.username || user.fullName,
//     watch_lists: [],
//     favorites: [],
//   });
// };
