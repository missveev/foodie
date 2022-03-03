import React from 'react'
import testimonials from '../testimonialdata';
import lettuce from "../asset/lettuce.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
    }

    return (
        <>
            <img src={lettuce} className="absolute w-32 md:w-72 right-0" alt="lettuce" />
            <section className='relative px-10 md:px-16 lg:px-28 py-16'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='z-10'>
                        <h1 className='text-4xl md:text-5xl font-bold mb-6'>What They Are Saying</h1>
                        <p className='text-l md:text-2xl'>it'a true our mistakes that we actually grow, get rid of doubt and stay focus. Tomorrow will be well. </p>
                    </div>

                    <Swiper
                        navigation modules={[Navigation]}
                        className="w-full h-full md:w-3/4 md:h-3/4 lg:w-1/2 lg:h-1/2 mySwiper"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide className='flex flex-col justify-center items-center mb-3 w-1/2 p-8 rounded-lg shadow-md my-4' key={testimonial.userId}>

                                <img src={testimonial.userImg} className="w-40 h-40 rounded-full mb-4 object-cover" alt={testimonial.imageAlt} />
                                <div className='flex flex-1 px-6 text-center flex-col justify-around items-center'>
                                    <p className='mb-4 text-xl md:text-2xl'>{testimonial.review}</p>
                                    <p className='text-xl md:text-2xl'>{testimonial.userName}</p>
                                    <p className='font-thin text-sm md:text-l'>{testimonial.location}</p>
                                </div>

                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </section>
        </>
    )
}


export default Testimonial