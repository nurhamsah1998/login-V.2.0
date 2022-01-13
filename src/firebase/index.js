// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5SLJzdff8sSPXbArGcIwW8zCHrF4OgZ4',
  authDomain: 'loginauth-dfb77.firebaseapp.com',
  projectId: 'loginauth-dfb77',
  storageBucket: 'loginauth-dfb77.appspot.com',
  messagingSenderId: '278740622882',
  appId: '1:278740622882:web:6ea538d4572cc08ba1747b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
