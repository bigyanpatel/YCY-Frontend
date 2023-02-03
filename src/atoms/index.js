import {atom} from 'recoil';

const AuthState = atom({
    key: "AuthState",
    default: {
        isLoading: false,
        user: JSON.parse(localStorage.getItem("authData"))?.user || null,
        token: JSON.parse(localStorage.getItem("authData"))?.token || "",
        error: '',
    }
})

export {AuthState}