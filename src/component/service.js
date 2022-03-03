import React from 'react'
import {BiTimeFive} from "react-icons/bi";
import {HiLocationMarker} from "react-icons/hi";
import { BsFillTelephoneFill } from 'react-icons/bs';
import pepper from "../asset/pepper.png";

const Service = () => {
    return (
        <>

            <section className='relative px-10 md:px-16 lg:px-28 py-16'>
            <img src={pepper} className=" absolute sm:top-0 md:-top-24 left-0 w-28 md:w-64  " alt="pepper" />
                <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 justify-center items-center pt-10 text-l md:text-xl'>
                    <div className='flex flex-col items-center font-xl '>
                        <BiTimeFive className='text-golden w-12 h-12'/>
                        <p className='font-semibold'>Today 10:00am- 7:00pm</p>
                        <p>Working Hours.</p>

                    </div>
                    <div className='flex flex-col items-center font-xl'>
                        <HiLocationMarker className='text-golden w-12 h-12'/>
                        <p className='font-semibold'>Lagos, Nigeria</p>
                        <p>Get direction.</p>

                    </div>
                    <div className='flex flex-col items-center '>
                        <BsFillTelephoneFill className='text-golden w-12 h-12'/>
                        <p className='font-semibold'>+234 80 000 000</p>
                        <p>Call Online.</p>

                    </div>

                    
                </div>

            </section>
        </>
    )
}

export default Service