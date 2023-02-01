import { loginService, signUpService } from "../services/authServices";

export const loginHandler = async (loginData) =>{
try {
    const res = await loginService(loginData);
    if (res.status === 200){
        return console.log(res.data.message);
    }
    } catch (error) {
    return console.log(error.response.data.message);
    }
}

export const signupHandler = async (signupData) =>{
    try {
        console.log(signupData);
        const res = await signUpService(signupData);
        if (res.status === 200){
            return console.log(res);
        }
        } catch (error) {
        return console.log(error.response.data.message);
        }
    }