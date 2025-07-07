import FoodCard from "../../Shared/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './FoodTab.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";



const FoodTab = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [showMenu, setShowMenu] = useState([])
    const itemsPerPage = 6;
    const [totalCount, setTotalCount] = useState(0)
    useEffect(()=>{
        fetch(`https://food-corner-bongo.vercel.app/menu/category/${items}`)
        .then(res => res.json())
        .then(data =>{
            setTotalCount(data.length);
        })
    },[items])

   

    useEffect(()=>{
        fetch(`https://food-corner-bongo.vercel.app/menu/category/${items}?page=${currentPage-1}&size=${itemsPerPage}`,{
            method: 'GET',
            headers:{
                contentType: 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setShowMenu(data)
            

        })
    },[currentPage, itemsPerPage, items])

    
  
    
    const numberOfPages = Math.ceil(totalCount / itemsPerPage)

    const pages= [...Array(numberOfPages).keys()];
    const pagination = {
        clickable: true,
        
            
          
        renderBullet: function (index, className) {
            return '<span class="' + className + '" data-index="' + index + '" >' + (index + 1) + '</span>';
        },
    };

    const handleSlideChange = (swiper) => {
        setCurrentPage(swiper.activeIndex + 1);
    };

    return (
        <div className="foodTab">
            <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
            onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
            {
                pages.map(page =><SwiperSlide 
               
                key={page +1}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2  gap-2 max-sm:gap-8">
                        {
                            showMenu.map(item => <FoodCard foodItem={item} key={item._id}></FoodCard>)
                        }
                    </div>
                </SwiperSlide>)
            }
            
        </Swiper>
        </div>
    );
};

export default FoodTab;