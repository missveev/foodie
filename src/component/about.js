import React from 'react'
import middle from "../asset/designn.png"
import salad from "../asset/sallad.png"
import { BsPlayCircleFill } from "react-icons/bs"
import { motion } from 'framer-motion'

const About = () => {
    return (
        <>

            <section className='relative px-10 md:px-16 lg:px-28 py-16'>
                <img src={middle} className="top-auto left-0 absolute h-1/2 w-1/3 md:w-2/6 md:h-1/2 lg:h-screen" alt="design" />
                <div className=" container flex flex-col lg:flex-row items-center gap-20  ">
                    <motion.div
                        whileInView={{ rotate: 360 }}
                        transition={{ duration: 5 }}
                        className='flex justify-center flex-1 mb-8 md:mb-10 lg:mb-0' >
                        <img src={salad} className="w-full h-full z-40 drop-shadow-xl" alt="salad" />
                    </motion.div>

                    <div className="flex flex-1 flex-col items-center lg:items-start sm:my-0 sm:mx-0 lg:my-32 z-10">

                        <h1 className='text-4xl md:text-5xl font-bold text-center lg:text-left mb-6'>Food is An Important Part Of A Balanced Diet</h1>
                        <p className='text-l md:text-2xl text-center lg:text-left mb-6 leading-8'>They actually asured me over and over that take little time off and come back and work, Fast forward two week after we are going for a new project.<br />
                            I wrote to let them know i'm ready to come back to take over and they kicked me off the team.</p>

                        <div className='flex flex-row gap-4 md:gap-12 mt-6 items-center justify-center text-center'>
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: 'tween' }}
                            >

                                <button className='btn flex flex-row rounded-full font-semibold bg-golden px-3 py-2 md:px-6 md:py-4  shadow-2xl shadow-golden'>Learn More</button>
                            </motion.div>

                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: 'tween' }}
                            >
                                <button className='btn flex flex-row rounded-full items-center justify-center px-3 py-2 md:px-6 md:py-4 gap-4 shadow-2xl' ><BsPlayCircleFill className='w-10 h-10' /> Watch Video</button>

                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default About