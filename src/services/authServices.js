import axios from "axios";
export const loginService = (loginData) =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/signIn`,
    data: {
      email : loginData.email,
      password : loginData.password
    }
  });

export const signUpService = (signUpData) =>
  axios.post(`${process.env.REACT_APP_API_URL}/signUp`, signUpData);