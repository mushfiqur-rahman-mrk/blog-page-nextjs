// Import the functions you need from the SDKs you need
import { getApp, initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOBeQ-l3AYw9Ov0lNo3I6BFps0XaDK66o",
  authDomain: "dragon-news-cc3ff.firebaseapp.com",
  projectId: "dragon-news-cc3ff",
  storageBucket: "dragon-news-cc3ff.appspot.com",
  messagingSenderId: "254822215452",
  appId: "1:254822215452:web:119f39db79fbb01d8c54d9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
export { app, auth };
