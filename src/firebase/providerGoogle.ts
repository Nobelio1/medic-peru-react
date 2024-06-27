import { User } from './../store/authSlice';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./credenciales";


const googleProvider =  new GoogleAuthProvider()

export const singInWithGoogle = async () => {

  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const user = result.user;
    const resultUser: User = {
      displayName: user.displayName || '',
      email: user.email || '',
      uid: user.uid || '',
      token: user.refreshToken || '',
    }

    localStorage.setItem('token', (await result.user.getIdTokenResult()).token)

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
