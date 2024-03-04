import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeatureMenu from "../FeatureMenu/FeatureMenu";
import PopularMenu from "../PopularMenu/PopularMenu";

import Recommends from "../Recommeds/Recommends";
import ServiceBanner from "../ServiceBanner/ServiceBanner";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ServiceBanner></ServiceBanner>
            <PopularMenu></PopularMenu>
            <div className="bg-black w-full h-[200px] text-center my-2">
                <p className="text-white p-16 text-6xl font-serif ">Call Us: 01797692607</p>
            </div>
            <Recommends></Recommends>
            <FeatureMenu></FeatureMenu>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;