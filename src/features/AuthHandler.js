import { loginService, signUpService } from "../services/authServices";
import toast from "react-hot-toast";
import { toastProps } from "../constants";

export default function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const loginHandler = async (loginData, authState, setAuthState) => {
  try {
    setAuthState({ ...authState, isLoading: true })
    const res = await loginService(loginData);
    if (res.status === 200) {
      await setAuthState({ ...authState, isLoading: false, token: getCookie('jwt') })
      localStorage.setItem(
        "authData",
        JSON.stringify({
          token: getCookie('jwt'),
          user: 'Test Users',
        })
      );
      toast.success(res.data.message, toastProps);
      return res;
    }
  } catch (error) {
    setAuthState({ ...authState, isLoading: false })
    toast.error(error.response.data.message, toastProps);
    return;
  }
}

export const signupHandler = async (signupData, authState, setAuthState) => {
  try {
    setAuthState({ ...authState, isLoading: true })
    const res = await signUpService(signupData);
    if (res.status === 201) {
      toast.success('Account Created! Sent a verification link to email. Please Check!', { ...toastProps, duration: 5000 });
      setAuthState({ ...authState, isLoading: false })
      return res;
    }
  } catch (error) {
    setAuthState({ ...authState, isLoading: false })
    toast.success(error.response.data.message, { ...toastProps, duration: 5000 });
    return;
  }
}

export const logoutHandler = (setAuth) => {
  localStorage.removeItem("authData");
  setAuth({
    isLoading: false,
    user: null,
    token: '',
    error: '',
  })
  toast.success('Logged Out!!', toastProps);
}