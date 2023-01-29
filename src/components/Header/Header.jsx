// import { Avatar } from '@material-ui/core'
// import { AccountCircle, Help, Home, Note, Search } from '@material-ui/icons'
import React from 'react'
import { HomeIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { FaStickyNote, FaUserCircle } from 'react-icons/fa';
import ycylogo from '../../assets/Images/ycylogo.png'
function Header() {
    return (
        <div className='sticky top-0 flex items-center justify-center z-[1000] shadow-[2px_3px_6px_rgba(187,187,187,0.5)] p-[3px]  w-[100%]'>
            < div className='flex flex-wrap items-center justify-between' >
                <div className='cursor-pointer'>
                    <img className="relative object-contain h-12 " src={ycylogo} alt="Ycylogo " />
                </div>

                <div className="flex items-center p-[5px] rounded-md border-2 border-gray-400  ml-[25px] hover:border-black max-[450px]:ml-0">
                    <MagnifyingGlassIcon className='w-4 h-5 text-gray-400 hover:text-black ' />
                    <input className='bg-transparent border-none outline-none color:rgb(49,49,49) text-black ml-2 ' type="text" placeholder="Search questions" />
                </div>

                <div className='flex'>
                    <div className="p-[5px] hover:bg-[#eee] cursor-pointer rounded-md ml-[30px] mr-[20px] max-[450px]:mr-0 max-[450px]:ml-[52px]"><HomeIcon className='w-8 h-8 text-gray-400 hover:text-black' /></div>
                    <div className="p-[5px] hover:bg-[#eee] cursor-pointer rounded-md ml-[20px] mr-[20px] max-[450px]:mr-0"><UserCircleIcon className='w-8 h-8 text-gray-400 hover:text-black' /></div>
                    <div className=" p-[5px] hover:bg-[#eee] cursor-pointer rounded-md ml-[20px] mr-[20px] max-[450px]:mr-0"><QuestionMarkCircleIcon className='w-8 h-8 text-gray-400 hover:text-black' /></div>
                    <div className="p-[5px] hover:bg-[#eee] cursor-pointer rounded-md ml-[20px] mr-[20px] max-[450px]:mr-0"><FaStickyNote className='w-8 h-8 text-gray-400 hover:text-black' /></div>
                    <div className='p-[5px] hover:bg-[#eee] cursor-pointer rounded-md ml-[25px] mr-[20px] max-[450px]:mr-0'>< FaUserCircle className='w-8 h-8 text-gray-400 hover:text-black' /></div>
                </div>

            </div>
        </div >
    )
}

export default Header