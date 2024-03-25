import { useRecoilValue } from "recoil";
import {Login, Register} from "../index"
import authScreenAtom from "../../shared/atoms/authAtom";

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
