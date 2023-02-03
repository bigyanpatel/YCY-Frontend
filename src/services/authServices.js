import axios from "axios";

axios.defaults.withCredentials = true;

export const loginService = (loginData) =>
axios.post(`${process.env.REACT_APP_API_URL}/signIn`, loginData);

export const signUpService = (signUpData) =>
axios.post(`${process.env.REACT_APP_API_URL}/signUp`, signUpData);