
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, useAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDo85CsQO6VVyIjOfvi6kyh4lgQN0sX7Ac",
  authDomain: "music-92b1b.firebaseapp.com",
  projectId: "music-92b1b",
  storageBucket: "music-92b1b.appspot.com",
  messagingSenderId: "224775678742",
  appId: "1:224775678742:web:5ca15b81b045355adcbe37",
  measurementId: "G-YLH3T09F20"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
export { provider };

export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth(app);