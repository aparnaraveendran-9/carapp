// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDorKmjYuengGHwmipXWYCnjTifVpx_Ivo",
  authDomain: "car-service-app-7afab.firebaseapp.com",
  projectId: "car-service-app-7afab",
  storageBucket: "car-service-app-7afab.appspot.com",
  messagingSenderId: "1069479951975",
  appId: "1:1069479951975:web:97fa472f848a0a0e5f5ec2",
  measurementId: "G-WDWVZSQYCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);