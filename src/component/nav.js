import React from 'react'
import { BsCart3 } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from "react-icons/ai";
import logo from '../asset/logo.png';
import { motion } from 'framer-motion';
import shape from "../asset/topshape.png";


const Nav = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <header>
            <img src={shape} className="absolute sm:h-1/2 md:h-1/2 lg:h-screen shadow-inner right-0 top-0 " alt="design" />

            <nav className=" relative flex flex-row justify-between items-center px-6 md:px-16 lg:px-28 mt-6 sm:mt-12 md:mt-6 lg:mt-3">

                <div className='flex justify-start item-start'>
                    <img src={logo} className="w-8 h-8" alt="logo" />
                    <h2 className='font-sans text-gray-dark text-2xl font-bold'>Foodie</h2>
                </div>

                <ul className='hidden lg:flex flex-1 flex-row items-end justify-end gap-14 font-sans font-bold text-xl text-dark-gray'>
                    <li ><a href='#home'>Home</a></li>
                    <li><a href='#packages'>Packages</a></li>
                    <li><a href='#about'>About Us</a></li>
                    <li><a href='#contact'>Contact Us</a></li>
                    <li><a href="#cart"><BsCart3 className='text-xl' /></a></li>
                    <button className=' btn bg-whitex font-bold text-xl rounded-full items-center px-4 py-1 '>Booking Now</button>

                </ul>
                <div className="flex lg:hidden flex-1 justify-end text-2xl">
                    <GiHamburgerMenu className="cursor-pointer w-10 h-10" onClick={() => setToggleMenu(true)} />
                    {toggleMenu && (

                        <motion.div

                            whileInView={{ x: [300, 0] }}

                            transition={{ duration: 0.85, ease: 'easeOut' }}
                            className="fixed top-0 bottom-0 right-0 p-4 w-3/4 h-screen bg-grey flex flex-col z-40">

                            <AiOutlineCloseCircle className="absolute cursor-pointer w-10 h-10 right-0 mx-8 my-4"
                                onClick={() => setToggleMenu(false)
                                } />
                            <ul className='flex justify-start items-start flex-col my-12 font-semibold text-3xl'>
                                <li className='cursor-pointer m-4'><a href='#home'>Home</a></li>
                                <li className='cursor-pointer m-4'><a href='#packages'>Packages</a></li>
                                <li className='cursor-pointer m-4'><a href='#about'>About Us</a></li>
                                <li className='cursor-pointer m-4'><a href='#contact'>Contact Us</a></li>
                                <li className='cursor-pointer m-4'><a href="#cart"><BsCart3 className='text-3xl'/></a></li>
                                <button className=' btn border bg-whitex font-bold text-xl rounded-lg px-4 py-1 m-4 '>Booking Now</button>
                            </ul>
                        </motion.div>
                    )}
                </div>
            </nav>



        </header>
    )
}

export default Nav;