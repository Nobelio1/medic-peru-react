import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./credenciales";

const doctorGoogleProvider = new GoogleAuthProvider();
doctorGoogleProvider.addScope('https://www.googleapis.com/auth/calendar');
doctorGoogleProvider.addScope('https://www.googleapis.com/auth/calendar.events');

export const signInDoctorWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, doctorGoogleProvider);
    const user = result.user;

    const tokenResult = await user.getIdTokenResult();
    const accessToken = tokenResult.token;

    await fetch('http://localhost:8080/api/save-doctor-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ accessToken })
    });

    return {
      displayName: user.displayName || '',
      email: user.email || '',
      uid: user.uid || ''
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
