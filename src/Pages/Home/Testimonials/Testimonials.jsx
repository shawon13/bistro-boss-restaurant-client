import './Testimonials.css'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='py-20'>
            <div className='max-w-screen-lg mx-auto'>
                <SectionTitle
                    subHeading={'what our clients say'}
                    heading={'testimonials'}
                ></SectionTitle>
                <div>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <div className='mx-20 text-center space-y-4'>
                                    <Rating className='max-w-64 mx-auto' value={review.rating} readOnly />
                                    <h3 className='text-5xl flex justify-center'><FaQuoteLeft /></h3>
                                    <p className='text-base font-inter w-4/5 mx-auto text-center'>{review.details}</p>
                                    <h4 className='yellow-color text-4xl font-medium font-inter'>{review.name}</h4>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;