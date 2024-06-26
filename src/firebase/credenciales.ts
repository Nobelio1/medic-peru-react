import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCF84eGwSNhOTpiycl7OW33Jj6tuznGBmo",
  authDomain: "medic-peru.firebaseapp.com",
  projectId: "medic-peru",
  storageBucket: "medic-peru.appspot.com",
  messagingSenderId: "852173061413",
  appId: "1:852173061413:web:774e543510081a97d52ecc",
  measurementId: "G-9YL8KY127T"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);

