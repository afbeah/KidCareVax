import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBoc4KC_2kOknPMwTF_mPMeNT7E5P4oKtg',
  authDomain: 'kidcarevax.firebaseapp.com',
  projectId: 'kidcarevax',
  storageBucket: 'kidcarevax.firebasestorage.app',
  messagingSenderId: '247642332042',
  appId: '1:247642332042:web:f2294b074929d343cb4673',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);