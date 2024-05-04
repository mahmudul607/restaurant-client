import './FeatureMenu.css';
import featureImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const FeatureMenu = () => {
    return (
        <section>
            <div className='my-8 py-16 bg-fixed featureMenu text-white'>
                <SectionTitle  subHeader={"Check it out"} header={"OUR Feature MENU"}></SectionTitle>
                <div className='flex p-8  flex-col xxs:flex-col md:flex-row lg:flex-row sm:flex-col xs:flex-col justify-center items-center py-16 md:px-20 lg:px-20 sm:px-8 xxs:p-2'>
                    <div className='xs:pb-4 xxs:pb-4 sm:pb-4'>
                        <img className='' src={featureImg} alt="" />
                    </div>
                    <div className='md:ml-10  sm:ml-6 xs:ml-4 xxs:ml-2'>
                        <p>Mar 4, 2024</p>
                        <h2 className='uppercase md:font-bold lg:font-bold sm:font-normal xs:font-normal'>WHERE CAN I GET SOME?</h2>
                        <p className='text-xs xs:text-sm xxs:text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos saepe ullam ipsa architecto ipsum id, impedit praesentium, voluptatibus vel voluptatem porro vitae dolorum sed, temporibus quas aliquam fuga voluptatum facere!</p>
                        <button className="btn btn-outline border-0   border-b-4  rounded-b-lg mt-8">Read More</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeatureMenu;