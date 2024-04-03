import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { RegisterIn, RegisterValidation } from "../interfaces/auth.inteface";

//!! ------------------------------------------------------------------------------------
//!! EN DESUSO
//!! ------------------------------------------------------------------------------------

export const useForm = (
  initialForm: RegisterIn,
  formValidations: RegisterValidation
) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState<any>({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  }, [formValidation]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues: { [key: string]: string | null } = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};

// {
//   "id": "660b13801fede25065c2bdd6",
//   "username": "pepito7777@gmail.com",
//   "password": null,
//   "roles": null,
//   "email": "pepito7777@gmail.com"
// }
