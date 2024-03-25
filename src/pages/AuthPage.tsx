import { useRecoilValue } from "recoil";
import {Login, Register} from "../components/auth/index"
import authScreenAtom from "../atoms/authAtom";

//!---------------------------------------------------------------------------------!//


export const AuthPage = () => {
    const authScreenState = useRecoilValue(authScreenAtom);

    //!---------------------------------------------------------------------------------!//

    return (
        <>
            {authScreenState === 'login' ? <Login /> : <Register />}
        </>
    )
}

//!---------------------------------------------------------------------------------!//
