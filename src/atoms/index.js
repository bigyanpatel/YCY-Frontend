import {atom} from 'recoil';

const AuthState = atom({
    key: "AuthState",
    default: {
        isLoading: false,
        user: null,
        token: '',
        error: '',
        value: 0,
    }
})

export {AuthState}