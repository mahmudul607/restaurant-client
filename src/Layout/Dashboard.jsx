import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaCartPlus, FaHome, FaList, FaMoneyCheckAlt, FaShoppingBag, FaUsers, FaUtensils } from "react-icons/fa";
import { MdContacts, MdFoodBank, MdMenu, MdRateReview } from "react-icons/md";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";



const Dashboard = () => {
    const [cart] = useCart();
 
    const [isAdmin] = useAdmin();
    return (
        <div className="flex ">
            <div className="w-12 lg:w-64 md:w-48 sm:w-44  bg-gray-400 fixed h-full flex flex-col ">
                <div className="font-logoFont text-red-500">
                    <h1 className="text-2xl font-extrabold p-4 mx-auto">Foods <br /><span className=" pl-8 text-black">Corner</span></h1>
                </div>
                <ul className="menu py-2 px-0 sm:p-4 text-md text-gray-800 ">

                    {
                        isAdmin ?
                            <>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/admin'}>
                                        <FaHome className="sm:text-sm text-xl " title="Admin Home"></FaHome>
                                        <span className="sm:block hidden">Admin Home</span></NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/addItems'}>
                                        <FaUtensils className="sm:text-sm text-xl " title="Add Items"></FaUtensils>
                                        <span className="sm:block hidden">Add Items</span></NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/manageItems'}>
                                        <FaList className="sm:text-sm text-xl " title="Manage Items"></FaList>
                                        <span className="sm:block hidden">Manage Items</span></NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/bookings'}>
                                    <FaBook className="sm:text-sm text-xl " title="Manage Bookings"></FaBook>
                                    <span className="sm:block hidden">Manage Bookings</span> </NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/allUsers'}>
                                        <FaUsers className="sm:text-sm text-xl " title="All Users"></FaUsers>
                                        <span className="sm:block hidden">All Users</span></NavLink>
                                </li>
                                
                            </>
                            :
                            <>  <li className="flex  gap-4">

                                <NavLink to={'/dashboard/user'}>
                                    <FaHome className="sm:text-sm text-xl " title="Profile"></FaHome>
                                    <span className="sm:block hidden">Profile</span></NavLink>
                            </li>
                                <li className="flex  gap-4 pl-0">

                                    <NavLink to={'/dashboard/payment'}>
                                        <FaCalendar className="sm:text-sm text-xl " title="Reservation"></FaCalendar>
                                        <span className="sm:block hidden">Reservation</span></NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/paymentHistory'}>
                                        <FaMoneyCheckAlt className="sm:text-sm text-xl " title="Payment History"></FaMoneyCheckAlt>
                                        <span className="sm:block hidden">Payment History</span></NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/cart'}>
                                        <FaCartPlus className="sm:text-sm text-xl " title="My Cart"></FaCartPlus>
                                        <span className="sm:block hidden">My Cart</span> ({cart.length})</NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/review'}>
                                        <MdRateReview className="sm:text-sm text-xl " title="Add Review"></MdRateReview>
                                        <span className="sm:block hidden">Add Review</span> </NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/myBooking'}>
                                        <FaShoppingBag className="sm:text-sm text-xl " title="My Booking"></FaShoppingBag>
                                        <span className="sm:block hidden">My Booking</span></NavLink>
                                </li></>
                    }
                    {/* //--------------------------- //*/}
                    <div className="divider bg-black h-[0.2rem]"></div>
                    <li className="flex  gap-4">

                        <NavLink to={'/'}>
                            <FaHome className="sm:text-sm text-xl " title="Home"></FaHome>
                            <span className="sm:block hidden">Home</span></NavLink>
                    </li>
                    <li className="flex  gap-4">

                        <NavLink to={'/menu'}>
                            <MdMenu className="sm:text-sm text-xl " title="Our Menu"></MdMenu>
                            <span className="sm:block hidden">Our Menu</span></NavLink>
                    </li>
                    <li className="flex  gap-4">

                        <NavLink to={'/food/:category'}>
                            <MdFoodBank className="sm:text-sm text-xl " title="Our Foods"></MdFoodBank>
                            <span className="sm:block hidden">Our Foods</span></NavLink>
                    </li>
                    <li className="flex  gap-4">

                        <NavLink to={'/contact'}>
                            <MdContacts className="sm:text-sm text-xl " title="My Booking"></MdContacts>
                            <span className="sm:block hidden">My Booking</span></NavLink>
                    </li>

                </ul>
            </div>
            <div className="p-8 lg:ml-64 sm:ml-48 ml-12 flex-1 overflow-y-auto">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;