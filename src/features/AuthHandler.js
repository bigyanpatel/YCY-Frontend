import { loginService, signUpService } from "../services/authServices";
import toast from "react-hot-toast";
import { toastProps } from "../constants";

export const loginHandler = async (loginData, authState, setAuthState) =>{
    try {
        setAuthState({...authState, isLoading: true})
        const res = await loginService(loginData);
        if (res.status === 200){
            await setAuthState({...authState, isLoading: false, token: res.data.authToken})
            localStorage.setItem(
                "authData",
                JSON.stringify({
                  token: res.data.authToken,
                  user: 'Bigyan',
                })
              );
            toast.success(res.data.message, toastProps);
            return res;
        }
        } catch (error) {
            setAuthState({...authState, isLoading: false})
            toast.error(error.response.data.message, toastProps);
            return;
        }
    }

export const signupHandler = async (signupData, authState, setAuthState) =>{
    try {
        setAuthState({...authState, isLoading: true})
        const res = await signUpService(signupData);
        if (res.status === 201){
            toast.success('Account Created! Sent and verification link to email. Please Check!', {...toastProps, duration: 5000});
            setAuthState({...authState, isLoading: false})
            return res;
        }
        } catch (error) {
            setAuthState({...authState, isLoading: false})
            toast.success(error.response.data.message, {...toastProps, duration: 5000});
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
    toast.success( 'Logged Out!!', toastProps);
}