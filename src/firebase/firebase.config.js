// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// console.log('firebase config file', import.meta.env.VITE_apikey)
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_APIKEY ,
//   authDomain:import.meta.env.VITE_AUTHDOMAIN ,
//   projectId:import.meta.env.VITE_PROJECTID ,
//   storageBucket:import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID ,
//   appId:import.meta.env.VITE_APPID ,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvVbERuckJQtlT7dTDzagE8CkUcYKTSzI",
  authDomain: "the-chef-recipe.firebaseapp.com",
  projectId: "the-chef-recipe",
  storageBucket: "the-chef-recipe.appspot.com",
  messagingSenderId: "32793433882",
  appId: "1:32793433882:web:06aa0189439aa4a2dbbea3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;