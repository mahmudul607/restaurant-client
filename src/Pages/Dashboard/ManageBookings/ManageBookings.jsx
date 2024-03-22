
import useBookings from "../../../hooks/useBookings";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const ManageBookings = () => {
    const [bookings] = useBookings();
    console.log(bookings)
    return (
        <div>
            <SectionTitle
                subHeader="At a Glance!"
                header="Manage all Bookings"

            ></SectionTitle>
            <div>
                <div className="p-8 text-3xl font-bold uppercase mt-8">
                    <h2>Total Bookings: <span className="text-green-600"></span></h2>
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
                            bookings.map((item, index) => <tr key={item._id}>
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
                                {/* <th>
                                    <Link
                                    to={`/dashboard/updateItem/${item._id}`}
                                        
                                        className="btn  btn-ghost btn-md text-2xl hover:text-red-600 text-white  bg-gray-400 "


                                    ><FaEdit className=" " /> </Link>
                                </th> */}
                                {/* <th>
                                    <button
                                        onClick={() => handleDeleteMenu(item)}
                                        className="btn  btn-ghost btn-md text-2xl hover:text-red-600 text-white  bg-red-500"


                                    ><RiDeleteBin6Line  /> </button>
                                </th> */}
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}


                </table>
            </div>

        </div>
    );
};

export default ManageBookings;