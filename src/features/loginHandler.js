import { loginService } from "../services/authServices";

export const loginHandler = async (loginData) =>{
try {
    const res = await loginService(loginData);
    if (res.status === 200){
        console.log(res.data.message);
        return;
    }
    } catch (error) {
    return console.log(error.response.data.message);
    }
}