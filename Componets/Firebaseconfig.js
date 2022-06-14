
import { initializeApp } from "firebase/app";
 import { getAuth  } from "firebase/auth";
 import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCVzuBdI5fUE4MaxgUtQt9ARhQWUlqtC2I",
  authDomain: "signups-63c8c.firebaseapp.com",
  projectId: "signups-63c8c",
  storageBucket: "signups-63c8c.appspot.com",
  messagingSenderId: "98692388890",
  appId: "1:98692388890:web:15de66d28d4e0e6e1f99a3",
  measurementId: "G-HD8BTJLJZK"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app);