import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAErmBdiq_2teU36niYXfWIse7VUgPYvCY",
  authDomain: "bridge-ai-20ed3.firebaseapp.com",
  projectId: "bridge-ai-20ed3",
  storageBucket: "bridge-ai-20ed3.appspot.com",
  messagingSenderId: "29635713828",
  appId: "1:29635713828:web:7e3a5a3e4f1a1d8d7d8b4c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();