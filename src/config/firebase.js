// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfolOwSoINf3MKNVulxO2d_ud0LmCK5YI",
  authDomain: "crocosoft-10527.firebaseapp.com",
  projectId: "crocosoft-10527",
  storageBucket: "crocosoft-10527.appspot.com",
  messagingSenderId: "375779002699",
  appId: "1:375779002699:web:025cc7ba32a3d0e8d9c0ce",
  measurementId: "G-VB37QBBDN3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
