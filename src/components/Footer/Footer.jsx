import React from 'react'
import Twitter from "../../assets/Socials/twitter.png"
import Instagram from "../../assets/Socials/instagram.png"
import Linkedin from "../../assets/Socials/linkedin.png"
import Facebook from "../../assets/Socials/facebook.png"

import leafs from '../../assets/Footer/v.svg'
import f_man from '../../assets/Footer/home_two/f_man.png'
import cloud from '../../assets/Footer/home_two/cloud.png'
import man from '../../assets/Footer/home_two/man.png'
import email_icon from '../../assets/Footer/home_two/email-icon.png'
import email_icon_two from '../../assets/Footer/home_two/email-icon_two.png'

export const Footer = () => {
  return (
    <footer className='relative' >
        <img class="absolute bottom-[66px] -z-10 right-10 w-28" src={leafs} alt="" />
        <img class="absolute bottom-[66px] -z-10 right-24 w-14" src={f_man} alt="" />
        <img class="absolute bottom-[350px] -z-10 left-16" src={cloud} alt="" />
        <img class="absolute bottom-[66px] left-[30px] w-[130px] -z-10" src={man} alt="" />
        <img class="absolute bottom-[220px] left-6 -z-10" src={email_icon} alt="" />
        <img class="absolute bottom-[150px] left-[200px] -z-10" src={email_icon_two} alt="" />
        <div class="pt-10 xs:px-4 h-[1000px] sm:h-[650px] lg:h-[440px]">
            <div class="flex flex-wrap">
                <div class="px-4 w-screen lg:w-[33.3%]">
                    <h3 class="font-bold text-lg pb-8">Get In Touch</h3>
                    <p className='font-bold text-[16px] mb-4 font-roboto'>Want to know about our community ! Then drop a message below. Our Team will contact you.</p>
                    <form className='relative shadow-2xl' action="#">
                        <input class="w-[100%] py-[7px] pl-[25px] pr-[12px] rounded-md outline-none" type="email" placeholder="Email" />
                        <button class="absolute right-0 px-[22px] py-[7px] bg-[#EC6B25] rounded-md" type="submit">Send</button>
                    </form>
                    <ul className='mt-[40px] mb-[16px] flex gap-3'>
                        <li><a className='w-[46px]' href="" target="_blank"><img className='w-[46px] h-[46px]' src={Facebook}/></a></li>
                        <li><a className='w-[46px]' href="" target="_blank"><img className='w-[46px] h-[46px]' src={Twitter}/></a></li>
                        <li><a className='w-[46px]' href="" target="_blank"><img className='w-[46px] h-[46px]' src={Instagram}/></a></li>
                        <li><a className='w-[46px]' href="" target="_blank"><img className='w-[46px] h-[46px]' src={Linkedin}/></a></li>
                    </ul>
                </div>
                <div class="px-4 mt-9 md:mt-0 w-screen sm:w-[50%] lg:w-[33.3%]">
                    <div class="pl-[70px]">
                        <h3 class="font-bold text-lg pb-8"> Info</h3>
                        <ul>
                            <li><a className='text-[#6B707F]' href="/about-us">About Us</a></li>
                            <li className='mt-[15px]'><a className='text-[#6B707F]' href="/view-blogs">Blog</a></li>
                            <li className='mt-[15px]'><a className='text-[#6B707F]' href="/contact-us">Contact Us</a></li>
                            <li className='mt-[15px]'><a className='text-[#6B707F]' href="/student-review">Student Review</a></li>
                            <li className='mt-[15px]'><a className='text-[#6B707F]' href="/upload-notes">Upload Notes</a></li>
                            <li className='mt-[15px]'><a className='text-[#6B707F]' href="/one-to-one-classes">One To One</a></li>
                        </ul>
                    </div>
                </div>
                <div class="px-4 mt-9 md:mt-0 w-screen sm:w-[50%] lg:w-[33.3%]">
                    <div class="pl-[70px]">
                        <h3 class="font-bold text-lg pb-8">Coming Soon...</h3>
                        <ul>
                            <li><a className='text-[#6B707F]'>Book Review</a></li>
                            <li className='mt-[15px]'><a className='text-[#6B707F]'>Book Reviews</a></li>
                            <li className='mt-[15px]'><a className='text-[#6B707F]'>Book Ask Question</a></li>
                            <li className='mt-[15px]'><a className='text-[#6B707F]'>College Review</a></li>
                            <li className='mt-[15px]'><a className='text-[#6B707F]'>College Reviews</a></li>
                            <li className='mt-[15px]'><a className='text-[#6B707F]' href="/sitemap">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[66px] bg-[#ec6b25] flex justify-center items-center">
                <p className='font-bold text-[#6b707f]'>&copy; 2022 All Rights Reserved by <a className='text-[#ffffff]' href="ycy.com">YCYCLASS.COM</a></p>
        </div>
    </footer>
  )
}
