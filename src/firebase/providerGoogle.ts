import { User } from './../store/authSlice';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./credenciales";
import { registerUser } from '../api/auth/authService';
import { RegisterUserIn } from '../interfaces/auth.inteface';

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

    const nombres = user.displayName!.split(' ').slice(0, 1).join(' ');


    const req: RegisterUserIn = {
      ape_Materno: '',
      ape_Paterno: '',
      email: user.email!,
      nombres: nombres,
      password: user.refreshToken,
      rol: 0
    }

    const res = await registerUser({ user: req });
    console.log(res);

    

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
