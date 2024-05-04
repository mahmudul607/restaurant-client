import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faQuoteLeft } from '@fortawesome/free-solid-svg-icons'



const Testimonial = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('Reviews.json')
            .then(res => res.json())
            .then(data => setReview(data));

    }, []);
    return (
        <section>
            <SectionTitle
                subHeader={"What our client say"}
                header={"Testimonials"}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    review.map(review => <SwiperSlide
                        key={review._id}

                    >
                        <div className="flex space-y-6 space-x-4 flex-col text-center items-center my-16 lg:mx-24 md:mx-12 sm:mx-6 xs:mx-2 xxs:mx-2">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            
                           
                           
                            <FontAwesomeIcon className="text-6xl" icon={faQuoteLeft} />

                            <p>{review.details}</p>
                            <h2 className="text-2xl text-orange-400">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>


        </section>
    );
};

export default Testimonial;