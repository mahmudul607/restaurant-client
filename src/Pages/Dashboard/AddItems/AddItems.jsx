import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <SectionTitle
                subHeader="what's new?"
                header="Add an Item"
            ></SectionTitle>

            <div className="bg-gray-200 p-8 mt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">

                    <label className="form-control w-full ">
                        <div className="label font-bold">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input {...register("name")}  type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                    <div className="flex w-full gap-4">
                    <label className="form-control w-full ">
                        <div className="label font-bold">
                            <span className="label-text">Category*</span>
                        </div>
                        <select {...register("category")} className="select select-bordered w-full p-3">
                                <option disabled selected>Select a Category?</option>
                                <option value="Pizzas">Pizzas</option>
                                <option value="Soups">Soups</option>
                                <option value="Desserts">Desserts</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Offers">Offers</option>
                            </select>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label  font-bold">
                            <span className="label-text">Price*</span>
                        </div>
                        <input {...register("price")}  type="text" placeholder="Type here" className="input input-bordered w-full " />
                        
                    </label>
                    </div>

                    <label className="form-control w-full ">
                        <div className="label  font-bold">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        
                        <textarea {...register("details")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>

                    
                    
                    <input {...register("imageURL")} type="file" className="file-input w-full max-w-xs" />

                    <button className="btn  mt-4 max-w-xs">Add Item <FaUtensils></FaUtensils></button>
                </form>
            </div>

        </div>
    );
};

export default AddItems;