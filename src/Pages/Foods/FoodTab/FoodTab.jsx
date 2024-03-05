import FoodCard from "../../Shared/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const FoodTab = ({ items }) => {
    const count = items.length;
    const itemsPerPage = 6;
    const numberOfPages = Math.ceil(count / itemsPerPage)

    const pages= [...Array(numberOfPages).keys()];
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                pages.map(page =><SwiperSlide 
                
                key={page +1}
                >
                    <div className="grid md:grid-cols-3">
                        {
                            items.map(item => <FoodCard foodItem={item} key={item._id}></FoodCard>)
                        }
                    </div>
                </SwiperSlide>)
            }
            
        </Swiper>
    );
};

export default FoodTab;