import React from 'react';

import logo from "../asset/logo.png"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import last from "../asset/last.png";

const Footer = () => {
    return (
        <>

            <section className='relative px-10 md:px-16 lg:px-28 pt-24 w-full bg-grey'>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <h1 className='text-4xl md:text-5xl font-bold mb-6'>Have Question in mind? <br /> Let us help you </h1>
                        <div className='flex flex-col md:flex-row justify-between items-center rounded-full h-14 w-full md:h-20 px-6 py-4 gap-12 shadow-xl'>
                            <input type="text" className="w-52 md:w-96" placeholder="yourmail@email.com" />
                            <button className='btn rounded-full font-semibold bg-golden px-6 py-2 shadow-xl'>Send</button>
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col my-16 z-10'>
                        <div className='flex flex-col md:flex-row justify-evenly mt-16 mb-6 gap-12 text-gray-dark text-l font-bold list-none'>
                            <div className='flex item-center'>
                                <img src={logo} className="w-8 h-8" alt="logo" />
                                <h2 className='font-sans text-gray-dark text-2xl font-bold'>Foodie</h2>
                            </div>
                            <div className='grid grid-cols-4 gap-6 md:gap-16 justify-start items-start'>
                                <li className='cursor-pointer'>Home</li>
                                <li className='cursor-pointer'>Packages</li>
                                <li className='cursor-pointer'>About Us</li>
                                <li className='cursor-pointer'>Contact Us</li>
                            </div>
                        </div>

                        <div className='grid grid-cols-4 text-gray-light text-left list-none text-md'>
                            <div className="flex flex-col md:flex-row gap-10 mt-0 lg:mt-12 md:mt-0">
                                <li><FaTwitter /></li>
                                <li><FaFacebook /></li>
                                <li><FaInstagram /></li>
                            </div>
                            <div>
                                <li>Quality</li>
                                <li>Help</li>
                                <li>Share</li>
                                <li>Career</li>
                            </div>
                            <div>
                                <li>234 80 800 000</li>
                                <li>hello@email.com</li>
                                <li>Lagos, Nigeria</li>

                            </div>
                            <div>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </div>
                        </div>
                    </div>
                    <h2 className='z-10'>&copy; MissVeev {(new Date().getFullYear())} All rights reserved.</h2>
                </div>
                <img src={last} className="absolute bottom-0 right-0  sm:h-1/2 md:h-1/2 lg:h-50 lg:w-50 " alt="design" />
            </section>
        </>
    )
}

export default Footer;