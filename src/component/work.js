import React from 'react'
import { GiMeal } from "react-icons/gi"
import { FaTruck } from "react-icons/fa"
import peppered from "../asset/pepperl.png"
import { BsHandIndexFill } from 'react-icons/bs'


const Work = () => {
    return (
        <>
      
            <section className='relative px-10 md:px-16 lg:px-28 py-16 bg-grey'>
            <img src={peppered} className="absolute w-28 md:w-64 top-0 md:-top-24 right-0" alt="pepper" />
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <h2 className='text-xl mb-6 text-golden font-semibold'>Work</h2>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
                        <p className='text-xl'>It's through  mistakes that you can actually grow. you get rid of everything that is not essential to mistakes</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12 py-16 w-4/5 lg:w-2/3'>
                        <div className='flex flex-col items-center font-xl rounded-xl shadow-2xl p-4'>

                            <GiMeal className='text-golden w-24 h-24 mb-6' />
                            <h1 className='font-semibold mb-6 text-xl md:text-3xl'>Pick Meals</h1>
                            <p className='text-l md:text-xl'>Choose your meals from our diverse weekly menu. Find gluten or diary free, low carb & veggie options.</p>
                        </div>
                        <div className='flex flex-col items-center font-xl rounded-xl shadow-2xl p-4'>
                            <BsHandIndexFill className='text-golden w-24 h-24 mb-6' />
                            <h1 className='font-semibold mb-6 text-xl md:text-3xl'>Choose How Often</h1>
                            <p className='text-l md:text-xl'>Our team of chef do the prep work, no more chopping, measuring  or sink full of dishes.</p>
                        </div>
                        <div className='flex flex-col items-center font-xl rounded-xl shadow-2xl p-4'>
                            <FaTruck className='text-golden w-24 h-24 mb-6' />
                            <h1 className='font-semibold mb-6 text-xl md:text-3xl'>Fast Deliveries</h1>
                            <p className='text-l md:text-xl'>Your freshly prepped 15-min driver kits arrive on your doorstep in a refrigerated box.</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Work