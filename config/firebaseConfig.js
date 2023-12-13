// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCZk2QwCoUiEZJh48Qe-jSc1oiyvbDc4eM",
//   authDomain: "hotel-management-eceff.firebaseapp.com",
//   projectId: "hotel-management-eceff",
//   storageBucket: "hotel-management-eceff.appspot.com",
//   messagingSenderId: "497230227150",
//   appId: "1:497230227150:web:4d93e2ef5e06344038d29f",
//   measurementId: "G-W5JVPZJGG3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// config/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCZk2QwCoUiEZJh48Qe-jSc1oiyvbDc4eM",
    authDomain: "hotel-management-eceff.firebaseapp.com",
    projectId: "hotel-management-eceff",
    storageBucket: "hotel-management-eceff.appspot.com",
    messagingSenderId: "497230227150",
    appId: "1:497230227150:web:4d93e2ef5e06344038d29f",
    measurementId: "G-W5JVPZJGG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;