import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Category.css';

import cat1 from '../../../assets/home/slide1.jpg'
import cat2 from '../../../assets/home/slide2.jpg'
import cat3 from '../../../assets/home/slide3.jpg'
import cat4 from '../../../assets/home/slide4.jpg'
import cat5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
        <SectionTitle
        subHeader={"From 11:00am to 10:00pm"}
        header={"ORDER ONLINE"}
        ></SectionTitle>
      <Swiper
        slidesPerView={4}
        loop= {true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  text-white  mb-6"
      >
        <SwiperSlide>
            <img src={cat1} alt="" />
            <p className='uppercase text-2xl font-bold -mt-8 text-center'>Salads</p>
        </SwiperSlide>
        
        <SwiperSlide>
            <img src={cat3} alt="" />
            <p className='uppercase text-2xl font-bold -mt-8 text-center'>Pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat4} alt="" />
            <p className='uppercase text-2xl font-bold -mt-8 text-center'>Soups</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat2} alt="" />
            <p className='uppercase text-2xl font-bold -mt-8 text-center'>Desserts</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={cat5} alt="" />
            <p className='uppercase text-2xl font-bold -mt-8 text-center'>Salads</p>
        </SwiperSlide>
        
      </Swiper>
    </section>
    );
};

export default Category;