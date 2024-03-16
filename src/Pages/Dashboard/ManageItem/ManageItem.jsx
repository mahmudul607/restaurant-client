import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItem = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    console.log(menu)

    // const handleUpdateMenu = item => {
    //     console.log(item);

    // }

    const handleDeleteMenu = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then( async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menu/${item._id}`)
                        refetch();
                        if (res.data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: `${item.name} is deleted`,
                                icon: "success"
                              });


                        }
                    

            }
        });

    }
    return (
        <div>
            <SectionTitle
                subHeader="Hurry Up!"
                header="Manage all Items"

            ></SectionTitle>
            <div>
                <div className="p-8 text-3xl font-bold uppercase mt-8">
                    <h2>Total Items: <span className="text-green-600">{menu.length}</span></h2>
                </div>
                <table className="table ">
                    {/* head */}
                    <thead className="uppercase text-lg font-bold bg-gray-400 text-black ">


                        <tr className="">
                            <th className="font-bold rounded-tl-2xl">

                            </th>
                            <th className="font-bold ">Item Image</th>
                            <th>Item Name</th>
                            <th>price</th>
                            <th >Update</th>
                            <th className="rounded-tr-2xl">Delete</th>
                        </tr>


                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>

                                    {index + 1}

                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>

                                    {item.name}

                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <Link
                                    to={`/dashboard/updateItem/${item._id}`}
                                        
                                        className="btn  btn-ghost btn-md text-2xl hover:text-red-600 text-white  bg-gray-400 "


                                    ><FaEdit className=" " /> </Link>
                                </th>
                                <th>
                                    <button
                                        onClick={() => handleDeleteMenu(item)}
                                        className="btn  btn-ghost btn-md text-2xl hover:text-red-600 text-white  bg-red-500"


                                    ><RiDeleteBin6Line  /> </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}


                </table>
            </div>

        </div>
    );
};

export default ManageItem;