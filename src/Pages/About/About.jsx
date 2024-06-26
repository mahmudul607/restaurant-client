import Cover from "../Shared/Cover/Cover";
import aboutCover from "../../assets/about/cover.jpg"
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";
// import ReCAPTCHA from "react-google-recaptcha";

const About = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
             <Cover para="would you like to try a dish" coverBg={aboutCover} coverTitle="About Restaurant"></Cover>

             <div>
             <SectionTitle subHeader="Visit Us" header="Find OUT US"></SectionTitle>
             <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8 text-white">
                <div className="items grid-cols-1 border border-gray-600">
                    <div className="heading flex justify-center  bg-yellow-700 h-12 w-full"><div className="icon flex text-white  text-2xl justify-center items-center "><FiPhoneCall/></div></div>
                    <div className="phone text-center h-48 flex flex-col   justify-center mx-6 bg-gray-700 mb-6">
                        <h1 className="text-2xl font-bold">Phone</h1>
                        <p className="text-sm">01797692607</p>
                    </div>
                </div>
                <div className="items grid-cols-1 border border-gray-600">
                    <div className="heading flex justify-center  bg-yellow-700 h-12 w-full"><div className="icon flex text-white text-2xl  justify-center items-center "><FaLocationDot/></div></div>
                    <div className="address text-center flex flex-col  justify-center h-48 mx-6 bg-gray-700 mb-6">
                        <h1 className="text-2xl font-bold">Address</h1>
                        <p className="text-sm">Uttara-1230, Sector-13, Road-1</p>
                    </div>
                </div>
                <div className="items grid-cols-1 border border-gray-600">
                    <div className="heading flex justify-center  bg-yellow-700 h-12 w-full"><div className="icon flex text-white text-2xl  justify-center items-center "><IoTime/></div></div>
                    <div className="period text-center flex flex-col  justify-center h-48 mx-6 bg-gray-700 mb-6">
                        <h1 className="text-2xl font-bold">Working Hours</h1>
                        <p className="text-sm">Sat-Mon: 10:00AM to 05:00PM</p>
                        <p className="text-sm">Wed-Fri: 08:00AM to 10:00PM</p>
                    </div>
                </div>
             </div>
             </div>

             <div className="cont">
             <SectionTitle subHeader="Send Us a Message" header="Contact Form"></SectionTitle>
             <div className="py-6">
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                   <div className="flex flex-col">
                   <label>Name</label>
                    <input className="border py-2" {...register("name")}/>
                   </div>
                    <div className="flex flex-col">
                    <label>Email</label>
                    <input className="border py-2" {...register("email")}/>
                    </div>
                    <div className="flex flex-col col-span-2">
                    <label>Phone</label>
                    <input className=" border py-2" {...register("phone")}/>
                    </div>
                    <div className="flex flex-col col-span-2">
                    <label>Message</label>
                    <textarea className=" border" {...register("message")}/>
                    </div>
                   <div className="flex justify-center align-middle text-2xl items-center rounded-md gap-4 cursor-pointer text-green-500 h-16 w-40 bg-yellow-700">
                   {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} /> */}
                   <input className=" " type="submit"/>
                    <FaPaperPlane/>
                   </div>

                </form>

             </div>
             </div>
            
        </div>
    );
};

export default About;