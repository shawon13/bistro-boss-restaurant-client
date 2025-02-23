import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import './Category.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='max-w-screen-lg mx-auto py-20'>
            <div className='text-center mb-8 w-96 mx-auto'>
                <SectionTitle subHeading={"From 11:00am to 10:00pm"} heading={'order online'}></SectionTitle>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <img src={slide1} alt="" />
                    <h4 className='text-3xl uppercase text-center text-white -mt-16 pb-16 font-cinzel font-normal'>salads</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h4 className='text-3xl uppercase text-center text-white -mt-16 pb-16 font-cinzel font-normal'>pizzas</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h4 className='text-3xl uppercase text-center text-white -mt-16 pb-16 font-cinzel font-normal'>soups</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h4 className='text-3xl uppercase text-center text-white -mt-16 pb-16 font-cinzel font-normal'>Desserts</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h4 className='text-3xl uppercase text-center text-white -mt-16 pb-16 font-cinzel font-normal'>varieties</h4>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;