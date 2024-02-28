import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyCpWZNM-K4AoOHR8PjpRdJNyA1tHT7RTXw",
    authDomain: "kleit-165c2.firebaseapp.com",
    databaseURL: "https://kleit-165c2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kleit-165c2",
    storageBucket: "kleit-165c2.appspot.com",
    messagingSenderId: "564846566076",
    appId: "1:564846566076:web:66f0c0aff9cb481d124eb9",
    measurementId: "G-5TQCKSV7EC"
  };


  //initialise Firebase App
  const app = initializeApp(firebaseConfig);
  // initialize Firebase Auth for that app immediately
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
  export { app, auth, getApp, getAuth };

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
