import { omit } from "lodash";
import { useState } from "react";

const useLoginForm = () => {
  const [loginData, setLoginData] = useState({});
  const [loginErrors, setLoginErrors] = useState({});

  const loginFormHandler = (e) => {
      const { name, value } = e.target;
      validateLoginForm(name, value);
      setLoginData({ ...loginData, [name]: value });
  };

  const validateLoginForm = (name, value) => {
    switch (name) {
      case "email":
        if (value.trim().length === 0)
          setLoginErrors({
            ...loginErrors,
            email: "email can't be empty",
          });
        else {
          const newObj = omit(loginErrors, "email");
          setLoginErrors(newObj);
        }
        break;
      case "password":
        if (value.trim().length === 0)
          setLoginErrors({
            ...loginErrors,
            password: "Password can't be empty",
          });
        else {
          const newObj = omit(loginErrors, "password");
          setLoginErrors(newObj);
        }
        break;

      default:
        return loginErrors;
    }
  };

  return {
    loginErrors,
    loginData,
    setLoginData,
    loginFormHandler,
    validateLoginForm,
  };
};

export { useLoginForm };