import {atom, useRecoilState} from 'recoil';

const AuthState = atom({
    key: "AuthState",
    default: {
        loggedIn: false,
        email: '',
        token: '',
    }
})

export const useAuthState = () => useRecoilState(AuthState);