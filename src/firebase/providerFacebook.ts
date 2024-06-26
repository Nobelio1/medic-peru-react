import { User } from './../store/authSlice';
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./credenciales";


const facebookProvider =  new FacebookAuthProvider()

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, facebookProvider);

    const user = result.user;
    const resultUser: User = {
      displayName: user.displayName || '',
      email: user.email || '',
      uid: user.uid || ''
    }

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
