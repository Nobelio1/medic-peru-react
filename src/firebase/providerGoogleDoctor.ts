import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./credenciales";
import { loginDoctor, registerUser } from "../api/auth/authService";
import { environment } from "../api/environment";
import { RegisterUserIn } from "../interfaces/auth.inteface";

const doctorGoogleProvider = new GoogleAuthProvider();
doctorGoogleProvider.addScope('https://www.googleapis.com/auth/calendar');
doctorGoogleProvider.addScope('https://www.googleapis.com/auth/calendar.events');

export const signInDoctorWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, doctorGoogleProvider);
    const user = result.user;

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
    console.log(res)

    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken2 = credential ? credential.accessToken : null;

    // Obtener el refreshToken
    const refreshToken = user.refreshToken;

    console.log("Access Token: ", accessToken2);
    console.log("Refresh Token: ", refreshToken);

    await loginDoctor(user.email!, refreshToken);

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

// export const getNewAccessToken = async (refreshToken: any) => {
//   const url = 'https://securetoken.googleapis.com/v1/token?key=AIzaSyCF84eGwSNhOTpiycl7OW33Jj6tuznGBmo';

//   const data = new URLSearchParams();
//   data.append('grant_type', 'refresh_token');
//   data.append('refresh_token', refreshToken);

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: data
//     });

//     if (!response.ok) {
//       throw new Error('Error refreshing token');
//     }

//     const responseData = await response.json();
//     console.log("Nuevo Access Token: ", responseData.access_token);
//     return responseData.access_token;
//   } catch (error) {
//     console.error("Error refreshing token: ", error);
//     return null;
//   }
// };

// // Ejemplo de uso
// const refreshToken = "TU_REFRESH_TOKEN";
// getNewAccessToken(refreshToken).then(newAccessToken => {
//   console.log("Nuevo Access Token: ", newAccessToken);
// });

export const obtenerRefreshToken = async (email: string): Promise<string> => {
  try{
    const req = await fetch(`${environment.API_MASTER}/sesion/obtenerRefreshToken/${email}`);
    const res = await req.json();
    
    return res.data;
  }catch(error){
    console.log(error);
    throw "Algo salio mal";
  }
}

export async function refreshAccessToken(refreshToken: string): Promise<string> {
  const url = "https://securetoken.googleapis.com/v1/token?key=AIzaSyCF84eGwSNhOTpiycl7OW33Jj6tuznGBmo";
  
  const body = {
    grant_type: "refresh_token",
    refresh_token: refreshToken
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error("Failed to refresh token");
  }

  const data = await response.json();
  return data.access_token;
}


export async function getAccessTokenFromIdToken(idToken: string): Promise<string> {
  const url = "https://oauth2.googleapis.com/token";

  const body = {
    grant_type: "urn:ietf:params:oauth:grant-type:token-exchange",
    subject_token_type: "urn:ietf:params:oauth:token-type:id_token",
    subject_token: idToken
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams(body).toString()
  });

  if (!response.ok) {
    throw new Error("Failed to exchange id token for access token");
  }

  const data = await response.json();
  return data.access_token;
}

