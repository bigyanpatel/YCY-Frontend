import { useState } from "react";

const useSignupForm = () => {
  const [signupData, setSignupData] = useState({});

  const signupFormHandler = (e) => {
      const { name, value } = e.target;
      setSignupData({ ...signupData, [name]: value });
  };

  return {
    signupData,
    setSignupData,
    signupFormHandler,
  };
}

export {useSignupForm}