import { loginService, signUpService } from "../services/authServices";
import toast from "react-hot-toast";
import { toastProps } from "../constants";

export const loginHandler = async (loginData, authState, setAuthState) =>{
try {
    setAuthState({...authState, isLoading: true})
    const res = await loginService(loginData);
    if (res.status === 200){
        setAuthState({...authState, isLoading: false, value: authState.value + 1})
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
        if (res.status === 200){
            toast.success(res.data.message, toastProps);
            setAuthState({...toastProps, duration: 5000})
            return res;
        }
        } catch (error) {
            setAuthState({...authState, isLoading: false})
            toast.success(error.response.data.message, {...toastProps, duration: 5000});
            return;
        }
    }