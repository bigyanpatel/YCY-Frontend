import { atom } from "recoil";

export const modalState = atom({
    key: 'modalState',
    default: false
});

export const modalTypeState = atom({
    key: 'modalTypeState',
    default: 'dropIn',
})


export const PostmodalState = atom({
    key: 'PostmodalState',
    default: false
});

export const postModalTypeState = atom({
    key: 'postModalTypeState',
    default: 'PostdropIn',
})
