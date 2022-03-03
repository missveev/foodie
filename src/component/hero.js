import React from 'react'
import food from "../asset/food.png";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <>
            <section className='px-10 md:px-16 lg:px-28 pt-12'>

                <div className=" container flex flex-col-reverse lg:flex-row justify-center items-center gap-12 ">
                    <motion.div

                        className="flex flex-1 flex-col items-center text-white lg:items-start sm:my-0 sm:mx-0 lg:my-32">

                        <h1 className='text-4xl md:text-5xl font-semibold text-center lg:text-left mb-6' >Your Favorite Food Delivered Hot &amp; Fresh</h1>
                        <p className='text-l md:text-2xl text-center lg:text-left mb-6'> Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.</p>

                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            className='justify-center item-center text-center text-white'>
                            <button className='btn flex flex-row rounded-full font-semibold bg-golden px-6 py-4 shadow-2xl shadow-golden'>Order Here</button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 5 }}
                        className='flex justify-center flex-1 sm:mb-0 md:mb-16 lg:mb-0 z-10'>
                        <img src={food} className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full z-40 drop-shadow-xl" alt="food" />
                    </motion.div>
                </div>
            </section>
            

        </>
    )
}

export default Hero;