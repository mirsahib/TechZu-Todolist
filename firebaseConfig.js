// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCp444jjTvddm--HZ7u1KKaym3ljxgz-1I',
  authDomain: 'project-eros-92a7f.firebaseapp.com',
  projectId: 'project-eros-92a7f',
  storageBucket: 'project-eros-92a7f.appspot.com',
  messagingSenderId: '888144587221',
  appId: '1:888144587221:web:5e5fafbb308d734cdff55c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
