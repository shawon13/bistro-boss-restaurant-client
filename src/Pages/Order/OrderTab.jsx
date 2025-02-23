import './OrderTab.css'
import FoodCard from '../../components/FoodCard/FoodCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const OrderTab = ({ items }) => {
    console.log(items.length)
    const count = items.length;
    const menuPerPage = 6;
    const totalPage = Math.ceil(count / menuPerPage)

    const pages = [...Array(totalPage).keys()]
    console.log(pages)
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div className='max-w-screen-lg mx-auto'>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default OrderTab;