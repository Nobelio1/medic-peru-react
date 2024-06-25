import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiTRKjENewlTOldc-BGrszCPXSTb4Z1Ps",
  authDomain: "medicperubeta.firebaseapp.com",
  projectId: "medicperubeta",
  storageBucket: "medicperubeta.appspot.com",
  messagingSenderId: "537542198137",
  appId: "1:537542198137:web:3249ce37d75c3958b4a5a8"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);

