
import useBookings from "../../../hooks/useBookings";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaCheckCircle } from "react-icons/fa";



const ManageBookings = () => {
    const [bookings] = useBookings();
    console.log(bookings);
    const totalItems = bookings.reduce((total, item) => total + item.foodIds.length,0)
    return (
        <div>
            <SectionTitle
                subHeader="At a Glance!"
                header="Manage all Bookings"

            ></SectionTitle>
            <div>
                <div className="p-8 flex sm:flex-row flex-col justify-between sm:text-3xl text-sm font-bold uppercase mt-8">
                    <h2>Total Bookings: <span className="text-green-600">{bookings.length}</span></h2>
                    <h2>Total Food Items: <span className="text-green-600">{totalItems}</span></h2>
                </div>
                <table className="table ">
                    {/* head */}
                    <thead className="uppercase sm:text-lg text-xs font-bold bg-gray-400 text-black ">


                        <tr className="">
                            <th className="rounded-tl-2xl">

                            </th>
                            <th className="">Client Name</th>
                            <th>Client Email</th>
                            <th>Booking Items</th>
                            <th >Billing Status</th>
                            <th className="rounded-tr-2xl">Status</th>
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
                                    {/* <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                           
                                            </div>
                                        </div>

                                    </div> */}
                                     {item.name || 'Client'}
                                </td>
                                <td>

                                    {item.email}

                                </td>
                                <td>{item.foodIds.length}</td>
                                <td>{item.billingStatus}</td>
                                <td>{item.billingStatus==='paid'?  <FaCheckCircle className="text-2xl text-green-700"></FaCheckCircle>:<FaCheckCircle className="text-2xl"></FaCheckCircle>}</td>
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