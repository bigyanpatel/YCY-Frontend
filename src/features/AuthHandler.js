import React from "react";
import { loginService, signUpService } from "../services/authServices";
import toast from "react-hot-toast";
import getCookie, { toastProps } from "../constants";
import { useRecoilState } from "recoil";
import { AuthState } from "../atoms/authState";
import { useNavigate } from "react-router";

export const AuthHandler = () => {
  const [authState, setAuthState] = useRecoilState(AuthState)
  const navigate = useNavigate();

  const loginHandler = async (loginData) => {
    try {
      setAuthState({ ...authState, isLoading: true })
      const res = await loginService(loginData);
      if (res.status === 200) {
        setAuthState({ ...authState, isLoading: false, token: getCookie('jwt'), user: res.data.data })
        localStorage.setItem(
          "authData",
          JSON.stringify({
            token: getCookie('jwt'),
            user: res.data.data,
          })
        );
        toast.success(res.data.message, toastProps);
        navigate('/')
        return res;
      }
    } catch (error) {
      setAuthState({ ...authState, isLoading: false })
      toast.error(error.response.data.message, toastProps);
      return;
    }
  }
  
  
  const signupHandler = async (signupData) => {
    try {
      setAuthState({ ...authState, isLoading: true })
      const res = await signUpService(signupData);
      if (res.status === 201) {
        toast.success('Account Created! Sent a verification link to email. Please Check!', { ...toastProps, duration: 5000 });
        setAuthState({ ...authState, isLoading: false })
        navigate('/login')
        return res;
      }
    } catch (error) {
      setAuthState({ ...authState, isLoading: false })
      toast.success(error.response.data.message, { ...toastProps, duration: 5000 });
      return;
    }
  }
  

   const logoutHandler = () => {
    localStorage.removeItem("authData");
    setAuthState({
      isLoading: false,
      user: '',
      token: '',
      error: '',
    })
    navigate('/login')
    toast.success('Logged Out!!', toastProps);
  }


  return {
    loginHandler,
    signupHandler,
    logoutHandler
  }
}
