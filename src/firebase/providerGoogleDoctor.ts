import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./credenciales";
import { loginDoctor } from "../api/auth/authService";

const doctorGoogleProvider = new GoogleAuthProvider();
doctorGoogleProvider.addScope('https://www.googleapis.com/auth/calendar');
doctorGoogleProvider.addScope('https://www.googleapis.com/auth/calendar.events');

export const signInDoctorWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, doctorGoogleProvider);
    const user = result.user;

    const tokenResult = await user.getIdTokenResult();
    const accessToken = tokenResult.token;

    await loginDoctor(user.email!, accessToken);

    return {
      displayName: user.displayName || '',
      email: user.email || '',
      uid: user.uid || '',
      token: user.refreshToken || '',
    };
  } catch (error) {
    console.log(error);
    return {
      displayName: '',
      email: '',
      uid: ''
    };
  }
};
