import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import leafs from '../../assets/Footer/v.svg'
import f_man from '../../assets/Footer/home_two/f_man.png'
import cloud from '../../assets/Footer/home_two/cloud.png'
import man from '../../assets/Footer/home_two/man.png'
import email_icon from '../../assets/Footer/home_two/email-icon.png'
import email_icon_two from '../../assets/Footer/home_two/email-icon_two.png'

export const Footer = () => {
  return (
    <footer className='relative w-screen'>
        <img className="absolute bottom-[66px] -z-10 right-10 w-28" src={leafs} alt="" />
        <img className="absolute bottom-[66px] -z-10 right-24 w-14" src={f_man} alt="" />
        <img className="absolute bottom-[350px] -z-10 left-16" src={cloud} alt="" />
        <img className="absolute bottom-[66px] left-[30px] w-[130px] -z-10" src={man} alt="" />
        <img className="absolute bottom-[220px] left-6 -z-10" src={email_icon} alt="" />
        <img className="absolute bottom-[150px] left-[200px] -z-10" src={email_icon_two} alt="" />
        <div className="pt-10 xs:px-4 h-[1000px] sm:h-[650px] lg:h-[440px]">
            <div className="flex flex-wrap">
                <div className="px-4 w-screen lg:w-[33.3%]">
                    <h3 className="font-bold text-lg pb-8">Get In Touch</h3>
                    <p className='font-medium text-[16px] mb-4'>Want to know about our community ! Then drop a message below. Our Team will contact you.</p>
                    <form className='relative shadow-2xl' action="#">
                        <input className="w-[100%] py-[7px] pl-[25px] pr-[12px] rounded-md outline-none" type="email" placeholder="Email" />
                        <button className="absolute right-0 px-[22px] py-[7px] bg-[#EC6B25] text-white rounded-md" type="submit">Send</button>
                    </form>
                    <div className='mt-[40px] mb-[16px] flex gap-3'>
                        <a className='hover:shadow-xl duration-300 rounded-[50%]' href="" target="_blank"><div className='w-[46px] h-[46px] flex items-center justify-center rounded-[50%] border-[#EC6B25] border-2 hover:border-[#17a2b8] hover:bg-[#17a2b8] text-[#EC6B25] fill-current hover:text-white hover:shadow-xl duration-300'><FontAwesomeIcon icon={faFacebookF}/></div></a>
                        <a className='hover:shadow-xl duration-300 rounded-[50%]' href="" target="_blank"><div className='w-[46px] h-[46px] flex items-center justify-center rounded-[50%] border-[#EC6B25] border-2 hover:border-[#17a2b8] hover:bg-[#17a2b8] text-[#EC6B25] fill-current hover:text-white hover:shadow-xl duration-300'><FontAwesomeIcon icon={faLinkedinIn}/></div></a>
                        <a className='hover:shadow-xl duration-300 rounded-[50%]' href="" target="_blank"><div className='w-[46px] h-[46px] flex items-center justify-center rounded-[50%] border-[#EC6B25] border-2 hover:border-[#17a2b8] hover:bg-[#17a2b8] text-[#EC6B25] fill-current hover:text-white hover:shadow-xl duration-300'><FontAwesomeIcon icon={faInstagram}/></div></a>
                        <a className='hover:shadow-xl duration-300 rounded-[50%]' href="" target="_blank"><div className='w-[46px] h-[46px] flex items-center justify-center rounded-[50%] border-[#EC6B25] border-2 hover:border-[#17a2b8] hover:bg-[#17a2b8] text-[#EC6B25] fill-current hover:text-white hover:shadow-xl duration-300'><FontAwesomeIcon icon={faTwitter}/></div></a>
                    </div>
                </div>
                <div className="px-4 mt-9 md:mt-0 w-screen sm:w-[50%] lg:w-[33.3%]">
                    <div className="pl-[70px]">
                        <h3 className="font-bold text-lg pb-8"> Info</h3>
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
                <div className="px-4 mt-9 md:mt-0 w-screen sm:w-[50%] lg:w-[33.3%]">
                    <div className="pl-[70px]">
                        <h3 className="font-bold text-lg pb-8">Coming Soon...</h3>
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
        <div className="h-[66px] bg-[#ec6b25] flex justify-center items-center">
            <p className='font-medium text-[#6b707f]'>&copy; 2022 All Rights Reserved by <a className='text-[#ffffff]' href="ycy.com">YCYCLASS.COM</a></p>
        </div>
    </footer>
  )
}
