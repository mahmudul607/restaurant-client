import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);

        const imageFile = {image: data.imageURL[0]}

        const res = await axiosPublic.post(img_hosting_api, imageFile, {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });
        console.log(res.data)
        if(res.data.success){
            const menuItems ={
                name: data.name,
                recipe: data.details,
                image: res.data.data.display_url,
                price: parseFloat(data.price),
                category: data.category
            }
            const menuRes = await axiosSecure.post('/menu', menuItems)
            if(menuRes.data.insertedId){
                // popup for success
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is add to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
       
    }
    return (
        <div>
            <SectionTitle
                subHeader="what's new?"
                header="Add an Item"
            ></SectionTitle>

            <div className="bg-gray-200 p-8 mt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                    <label className="form-control w-full ">
                        <div className="label font-bold">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input {...register("name", {required:true})}  type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                    <div className="flex w-full gap-4">
                    <label className="form-control w-full ">
                        <div className="label font-bold">
                            <span className="label-text">Category*</span>
                        </div>
                        <select {...register("category",{required:true})} defaultValue="default" className="select select-bordered w-full p-3">
                                <option disabled value="default">Select a Category?</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drink</option>
                                <option value="salad">Salad</option>
                                <option value="offered">Offered</option>
                            </select>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label  font-bold">
                            <span className="label-text">Price*</span>
                        </div>
                        <input {...register("price", {require:true})}  type="number" placeholder="Type here" className="input input-bordered w-full " />
                        
                    </label>
                    </div>

                    <label className="form-control w-full ">
                        <div className="label  font-bold">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        
                        <textarea {...register("details", {require:true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>

                    
                    
                    <input {...register("imageURL", {required:true})} type="file" className="file-input w-full max-w-xs" />

                    <button className="btn  mt-4 max-w-xs">Add Item <FaUtensils></FaUtensils></button>
                </form>
            </div>

        </div>
    );
};

export default AddItems;