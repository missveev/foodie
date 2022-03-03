import React from 'react'
import products from '../data';
import { motion } from 'framer-motion';
const Menu = () => {
    return (
        <>
            <section className='px-10 md:px-16 lg:px-28 py-20'>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <h1 className='text-4xl md:text-5xl font-bold mb-6'>Explore Our Best Menu</h1>
                        <p  className='text-l md:text-2xl'>it'a true our mistakes that we actually grow, get rid of doubt and stay focu. Tomorrow will be well. </p>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 py-16">
                        {products.map((product) => (
                            <div key={product.id} className="group relative rounded-xl shadow-2xl pb-6">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img src={product.imgUrl} className="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-tr-2xl rounded-bl-2xl"
                                        alt={product.imgAlt} />
                                </div>
                                <div className="mt-4 flex justify-between px-4">
                                    <div>
                                        <h3 className="text-xl md:text-3xl lg:text-2xl text-left "><a href={product.href}>  <span aria-hidden="true" className="absolute inset-0" />{product.title}</a></h3>

                                        <p className="mt-1 text-sm md:text-md lg:text-sm ">{product.tag}</p>
                                    </div>
                                    <p className="text-sm md:text-xl lg:text-sm">{product.price}</p>
                                </div>
                                <div className='px-4 mb-2'>
                                    <h3 className="text-sm md:text-xl lg:text-sm mt-6   text-left mb-4 ">{product.description}</h3>

                                    <button className='btn flex items-end justify-end rounded-full font-semibold bg-golden px-6 py-2 shadow-xl'>Add to Cart</button>

                                </div>
                            </div>
                        ))}
                    </div>
                    <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            className='items-center w-40 justify-center py-4'>
                        <button className='btn flex rounded-full font-semibold bg-golden px-6 py-2 w-36 shadow-xl items-center justify-center'>Load More</button>
                    </motion.div>


                </div>
            </section>
        </>
    )
}

export default Menu