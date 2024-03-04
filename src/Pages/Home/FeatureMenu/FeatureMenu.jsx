import './FeatureMenu.css';
import featureImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const FeatureMenu = () => {
    return (
        <section>
            <div className='my-8 py-16 bg-fixed featureMenu text-white'>
                <SectionTitle  subHeader={"Check it out"} header={"OUR Feature MENU"}></SectionTitle>
                <div className='flex p-8    justify-center items-center py-16 px-20'>
                    <div className=''>
                        <img className='' src={featureImg} alt="" />
                    </div>
                    <div className='md:ml-10  '>
                        <p>Mar 4, 2024</p>
                        <h2 className='uppercase font-bold'>WHERE CAN I GET SOME?</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos saepe ullam ipsa architecto ipsum id, impedit praesentium, voluptatibus vel voluptatem porro vitae dolorum sed, temporibus quas aliquam fuga voluptatum facere!</p>
                        <button className="btn btn-outline border-0   border-b-4  rounded-b-lg mt-8">Read More</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeatureMenu;