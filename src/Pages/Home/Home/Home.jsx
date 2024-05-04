import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeatureMenu from "../FeatureMenu/FeatureMenu";
import PopularMenu from "../PopularMenu/PopularMenu";

import Recommends from "../Recommeds/Recommends";

import Testimonial from "../Testimonial/Testimonial";
import Cover from "../../Shared/Cover/Cover";
import serviceBannerBg from "../../../assets/home/chef-service.jpg"


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Foods Corner | Home</title>

            </Helmet>
            <Banner></Banner>
            <Category></Category>
            {/* <ServiceBanner></ServiceBanner> */}
            <Cover coverBg={serviceBannerBg} coverTitle={"Bistro Boss"}></Cover>
            <PopularMenu></PopularMenu>
            <div className="bg-black w-full h-[200px] text-center my-2">
                <p className="text-white p-16 lg:text-6xl md:text-3xl sm:textarea-2xl font-serif ">Call Us: 01797692607</p>
            </div>
            <Recommends></Recommends>
            <FeatureMenu></FeatureMenu>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;