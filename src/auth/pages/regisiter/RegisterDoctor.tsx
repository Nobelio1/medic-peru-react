import { useRecoilValue } from "recoil"
import registerDoctorScreenAtom from "../../../shared/atoms/registerDoctorAtom"
import { RegisterPacient, RegisterDoctorSpecialization } from "../.."

export const RegisterDoctor = () => {

    const registerDoctorState = useRecoilValue(registerDoctorScreenAtom)

    return (
        <>
            {registerDoctorState === 'firstPart' ? <RegisterPacient /> : <RegisterDoctorSpecialization />}
        </>
    )
}
