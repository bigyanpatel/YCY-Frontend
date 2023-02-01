import { useState } from "react";

export const useTogglePassword = () => {
  const [passwordToggle, setPasswordToggle] = useState({
    type: "password",
    isShow: false,
  });

  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState({
    type: "password",
    isShow: false,
  });

  const checkPasswordView = () => {
    passwordToggle.isShow
      ? setPasswordToggle({
          isShow: false,
          type: "password",
        })
      : setPasswordToggle({ isShow: true, type: "text" });
  };

  const checkConfirmPasswordView = () => {
    confirmPasswordToggle.isShow
      ? setConfirmPasswordToggle({
          isShow: false,
          type: "password",
        })
      : setConfirmPasswordToggle({ isShow: true, type: "text" });
  };

  return {
    passwordToggle,
    checkPasswordView,
    confirmPasswordToggle,
    checkConfirmPasswordView,
  };
};