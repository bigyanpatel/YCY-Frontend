import { Avatar } from '@mui/material';
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { AuthState } from '../../atoms';
import { modalState, modalTypeState, PostmodalState, postModalTypeState } from '../../atoms/modalAtom'
import { stringAvatar } from '../../constants';

function InputBox() {
    const [modalOpen, setModalOpen] = useRecoilState(modalState);
    const [modalType, setModalType] = useRecoilState(modalTypeState);
    const [postmodalOpen, setPostModalOpen] = useRecoilState(PostmodalState);
    const [postModalType, setPostModalType] = useRecoilState(postModalTypeState);
    const state = useRecoilValue(AuthState)

    return (
        <div className="flex flex-col  border-[#ec6b25] hover:border-hovercolor bg-[#ffffff] rounded-md max-w-[700px] max-[800px]:max-w-[900px]">
            <div className="flex items-center mt-2 ml-2">
                <Avatar className="h-[45px] w-[30px]" {...stringAvatar(state.user.name)}/>
                <button onClick={() => {
                    setModalOpen(true);
                    setModalType('dropIn');
                }}
                    className="ml-[10px] max-[420px]:ml-[3px] border w-[90%] bg-[#f1f2f2] border-[#e3d8d8] 
                     text-[#000000]
                    rounded-2xl pl-[10px] pr-[5px] 
                    pt-1 pb-1 text-left font-medium opacity-80 hover:opacity-100">What do u want to ask or share?</button>
            </div>
            <div>

            </div>
            <div className="box-border flex mt-[4px] mb-[4px] ml-[40px] max-[420px]:ml-[15px]">
                <div className="box-border flex items-center flex-1 ">
                    <button className="pt-0 pb-0 pl-[10px] pr-[10px] w-[75%] h-[30px] min-w-[30px] hover:bg-[#f7f7f7] rounded-[1000px] text-[#000000] font-bold " onClick={() => {
                        setModalOpen(true);
                        setModalType('dropIn');
                    }}>Ask</button>
                </div>
                {/* <div className="  box-border border-r border-[#dee0e1] h-[20px] ml-[-60px] "></div> */}
                <div className="box-border flex items-center flex-1">
                    <button className="pt-0 pb-0 pl-[10px] pr-[10px] w-[75%] h-[30px] min-w-[30px] hover:bg-[#f7f7f7] rounded-[1000px] text-[#000000] font-bold">Q/A</button>
                </div >
                <div className="box-border flex items-center flex-1">
                    <button className="pt-0 pb-0 pl-[10px] pr-[10px] w-[75%] h-[30px] min-w-[30px] hover:bg-[#f7f7f7] rounded-[1000px] text-[#000000] font-bold" onClick={() => {
                        setPostModalOpen(true);
                        setPostModalType('PostdropIn');
                    }}>Post</button>
                </div>
            </div>

        </div>
    )
}

export default InputBox