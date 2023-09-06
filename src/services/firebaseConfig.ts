// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC04zmXlUk-FmxCn-bSyao7JvqZO_R5xSY",
  authDomain: "poc-eitree.firebaseapp.com",
  projectId: "poc-eitree",
  storageBucket: "poc-eitree.appspot.com",
  messagingSenderId: "537715628016",
  appId: "1:537715628016:web:d5d96dee058c1cacad2f35",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
