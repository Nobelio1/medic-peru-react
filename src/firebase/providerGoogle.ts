import { User } from './../store/authSlice';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./credenciales";

const doctorGoogleProvider = new GoogleAuthProvider();
doctorGoogleProvider.addScope('https://www.googleapis.com/auth/calendar');
doctorGoogleProvider.addScope('https://www.googleapis.com/auth/calendar.events');


export const singInWithGoogle = async () => {

  try {
    const result = await signInWithPopup(FirebaseAuth, doctorGoogleProvider);
    const user = result.user;
    const resultUser: User = {
      displayName: user.displayName || '',
      email: user.email || '',
      uid: user.uid || '',
      token: user.refreshToken || '',
    }

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken2 = credential ? credential.accessToken : null;

    localStorage.setItem('token', accessToken2!)

    return resultUser;
  } catch (error) {
    console.log(error);
    const result: User = {
      displayName: '',
      email: '',
      uid: ''
    }
    return result
    
  }
}


export const logoutFirebase = async () => {
  await FirebaseAuth.signOut();
  return false;
}
