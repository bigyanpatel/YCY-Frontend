import React, { useState, useEffect } from 'react'
import { HomeIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { CgNotes } from "react-icons/cg";
import ycylogo from '../../assets/Images/ycylogo.png'
import { SidebarData } from './SidebarData';
import { useRecoilValue } from 'recoil';
import { AuthState } from '../../atoms/authState';
import { AuthHandler } from '../../features/AuthHandler';
import { Avatar } from '@mui/material';
import { stringAvatar } from '../../constants';

function Header() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const {logoutHandler} = AuthHandler()

    useEffect(() => {
        setScreenWidth(window.innerWidth);
    }, []);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const state = useRecoilValue(AuthState)

    return (
        <div className='relative top-0 flex items-center justify-center  shadow-[2px_3px_6px_rgba(187,187,187,0.5)] p-[3px]  w-[100%]'>
            < div className='flex flex-wrap items-center justify-between' >
                <div className='cursor-pointer'>
                    <img className="relative object-contain h-12 " src={ycylogo} alt="Ycylogo " />
                </div>

                <div className="flex items-center p-[5px] rounded-md border-2 border-[#ec6b25]  ml-[25px] hover:border-black max-[749px]:ml-[-50px] duration-300">
                    <MagnifyingGlassIcon className='w-4 h-5 text-[#ec6b25] hover:text-black ' />
                    <input className='bg-transparent border-none outline-none color:rgb(49,49,49) text-black ml-2 ' type="text" placeholder="Search questions" />
                </div>

                <div className='flex items-center'>
                    <div className=" p-[5px] hover:bg-[#eee] cursor-pointer rounded-md ml-[30px] mr-[20px] max-[450px]:mr-0 max-[794px]:ml-[140px] max-[600px]:ml-[75px] max-[420px]:ml-[40px]  text-[#ec6b25] hover:text-black duration-300"><HomeIcon className='w-8 h-8' /></div>
                    <div className="p-[5px] hover:bg-[#eee] cursor-pointer rounded-md ml-[20px] mr-[20px] max-[450px]:mr-0 text-[#ec6b25] hover:text-black duration-300"><UserCircleIcon className='w-8 h-8' /></div>
                    <div className=" p-[5px] hover:bg-[#eee] cursor-pointer rounded-md ml-[20px] mr-[20px] max-[450px]:mr-0 text-[#ec6b25] hover:text-black duration-300"><QuestionMarkCircleIcon className='w-8 h-8' /></div>
                    <div className="p-[5px] hover:bg-[#eee] cursor-pointer rounded-md ml-[20px] mr-[20px] max-[450px]:mr-0 text-[#ec6b25] hover:text-black duration-300"><CgNotes className='w-8 h-8' /></div>
                    <div className='p-[5px] hover:bg-[#eee] cursor-pointer rounded-md ml-[20px] mr-[20px] max-[450px]:mr-0 text-[#ec6b25] hover:text-black duration-300' onClick={logoutHandler}>< Avatar {...stringAvatar(state.user.name)}/>
                        {screenWidth <= 768 && sidebarVisible && (
                            <div className="h-[100vh] w-[300px] max-w-[360px] z-[100] absolute bg-[#ffffff] left-0 top-0  flex flex-col ">
                                <ul className="h-auto w-[100%] p-0 ">
                                    {SidebarData.map((val, key) => {
                                        return (
                                            <li className="w-[100%] h-[80px]  list-none m-0 flex flex-row justify-center items-center cursor-pointer hover:bg-[#eee] duration-300 #id.active:bg-[#eee]" key={key} id={window.location.pathname === val.link ? "active" : ""} onClick={() => { window.location.pathname = val.link }} >
                                                <div className="flex-[30%] grid place-items-center">{val.icon}</div><div className="text-[#000000] flex-[70%] duration-300">{val.title}</div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Header