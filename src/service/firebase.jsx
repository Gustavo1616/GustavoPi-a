import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7M9YTaCTOkvvBAETk9NChGBE7Z2H-C0s",
  authDomain: "app-sgtomorrison.firebaseapp.com",
  projectId: "app-sgtomorrison",
  storageBucket: "app-sgtomorrison.firebasestorage.app",
  messagingSenderId: "942020995259",
  appId: "1:942020995259:web:0890d950af8bff89bc219e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)