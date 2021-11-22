import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD_pWUaExkGJmNOFdZ7Kfl5PbBbeYlYYdE',
  authDomain: 'futura-ee5c7.firebaseapp.com',
  projectId: 'futura-ee5c7',
  storageBucket: 'futura-ee5c7.appspot.com',
  messagingSenderId: '146114347006',
  appId: '1:146114347006:web:09f9c8db9737f508720aaf',
};

const app = initializeApp(firebaseConfig);

export const auth = app.auth();
export const storage = app.storage();
export const firestore = app.firestore();
export default app;
