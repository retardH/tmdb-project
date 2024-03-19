// import { db } from '@/lib/firebase';
// import { FireBaseAddWatchlistsPayload } from '@/lib/types';
// import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';

// export const getUserWatchLists = async (id: any) => {
//   const docRef = doc(db, 'user', 'HtetZarni');
//   const docSnap = await getDoc(docRef);
//   if (docSnap.exists()) {
//     console.log('Document data:', docSnap.data());
//   } else {
//     console.log('No such document!');
//   }
// };

// export const addWatchList = async (
//   id: string,
//   payload: FireBaseAddWatchlistsPayload,
// ) => {
//   console.log(payload);
//   const userRef = doc(db, 'user', 'HtetZarni');
//   await updateDoc(userRef, {
//     watch_lists: arrayUnion(payload),
//   });
// };
