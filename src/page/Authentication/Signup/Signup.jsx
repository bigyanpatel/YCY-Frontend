import React from 'react'
import { useSignupForm } from '../../../hooks/useSignupForm';
import { signupHandler } from '../../../features/AuthHandler';

export const Signup = () => {
    const { signupData, signupFormHandler } = useSignupForm();

  return (
    <div className='flex p-[15px] my-[50px] justify-center items-center min-h-screen'>
        <div className='relative h-[600px] w-[535px] overflow-hidden shadow-2xl border-[rgba(251,54,0,0.54)] border'>
            <div className='absolute left-0 flex flex-col justify-center items-center w-[320px] pt-[30px] px-[30px]'>
                <h3 className='text-[28px] font-bold'>Sign Up</h3>
                <hr className='w-[100%] my-[16px]'/>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        signupHandler(signupData);
                    }}
                    className="w-full flex justify-center flex-col"
                >
                    <input 
                        required
                        onChange={signupFormHandler}
                        name='name'
                        value={signupData.name}
                        className="w-full text-md font-bold py-3 border-b-2 border-gray-300 outline-none focus:border-[#6c757d] hover:border-[#6c757d] bg-transparent duration-300"
                        type="text" 
                        placeholder="Your Name"
                    />
                    <input 
                        required
                        onChange={signupFormHandler}
                        name='email'
                        value={signupData.email}
                        className="w-full text-md font-bold py-3 border-b-2 border-gray-300 outline-none focus:border-[#6c757d] hover:border-[#6c757d] bg-transparent duration-300" 
                        type="email" 
                        placeholder="Your Email"
                    />
                    <input 
                        required
                        onChange={signupFormHandler}
                        name='phone'
                        value={signupData.phone}
                        className="w-full text-md font-bold py-3 border-b-2 border-gray-300 outline-none focus:border-[#6c757d] hover:border-[#6c757d] bg-transparent duration-300" 
                        type="number" 
                        placeholder="Your Contact No"
                    />
                    <input 
                        required
                        onChange={signupFormHandler}
                        name='password'
                        value={signupData.password}
                        className="w-full text-md font-bold py-3 border-b-2 border-gray-300 outline-none focus:border-[#6c757d] hover:border-[#6c757d] bg-transparent duration-300" 
                        type="password" 
                        placeholder="Password"
                    />
                    <input 
                        required
                        onChange={signupFormHandler}
                        name='confirmPassword'
                        value={signupData.confirmPassword}
                        className="w-full text-md font-bold py-3 border-b-2 border-gray-300 outline-none focus:border-[#6c757d] hover:border-[#6c757d] bg-transparent duration-300" 
                        type="password" 
                        placeholder="Confirm Password"
                    />
                    <button className="text-[14px] font-bold px-[15px] py-[13px] mt-[22px] mx-[30px] border rounded-[50px] hover:border-[grey] shadow-md duration-300">
                        CREATE ACCOUNT
                    </button>
                    <div className="flex items-start">
                        <div className="w-[50%] border-t mx-1 self-center border-gray-300"></div>
                        <span className="px-2 my-2 text-gray-400 font-semibold text-center">
                        OR
                        </span>
                        <div className="w-3/6 border-t mx-1 self-center border-gray-300"></div>
                    </div>
                </form>
                <div className="text-sm font-display font-semibold text-gray-700 text-center">
                    Already have an account ? <a className="cursor-pointer text-indigo-600 hover:text-indigo-800" href='/login'>Log In</a>
                </div>
            </div>
            <div className='absolute top-0 left-0 right-0 bottom-0 -z-10 bg-gradient-45 from-[rgb(248,123,88)] to-[rgb(251,54,0)]'>
                <span className='absolute rotate-45 h-[220px] w-[220px] bg-[#d2691e6e] top-[-172px] right-0 rounded-[32px]'></span>
                <span className='absolute rotate-45 h-[540px] w-[190px] bg-gradient-45 from-[#fb532e5f] to-[rgb(236,76,32)] top-[-24px] right-0 rounded-[32px]'></span>
                <span className='absolute rotate-45 h-[400px] w-[200px] bg-[#ff6a004b] top-[420px] right-[50px] rounded-[60px]'></span>
                <span className='absolute rotate-45 h-[520px] w-[520px] bg-[#fff] top-[-50px] right-[120px] rounded-tr-[72px]'></span>
            </div>
        </div>
    </div>
  )
}
