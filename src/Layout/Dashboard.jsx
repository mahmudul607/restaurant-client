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
            <div className="w-64 bg-gray-400 fixed h-full flex flex-col ">
                <div className="font-logoFont text-red-500">
                    <h1 className="text-2xl font-extrabold p-4 mx-auto">Foods <br /><span className=" pl-8 text-black">Corner</span></h1>
                </div>
                <ul className="menu p-4 text-md text-gray-800 ">

                    {
                        isAdmin ?
                            <>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/admin'}>
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/addItems'}>
                                        <FaUtensils></FaUtensils>
                                        Add Items</NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/manageItems'}>
                                        <FaList></FaList>
                                        Manage Items</NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/bookings'}>
                                    <FaBook></FaBook>
                                        Manage Bookings </NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/allUsers'}>
                                        <FaUsers></FaUsers>
                                        All Users</NavLink>
                                </li>
                                
                            </>
                            :
                            <>  <li className="flex  gap-4">

                                <NavLink to={'/dashboard/user'}>
                                    <FaHome></FaHome>
                                    Profile</NavLink>
                            </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/payment'}>
                                        <FaCalendar></FaCalendar>
                                        Reservation</NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/paymentHistory'}>
                                        <FaMoneyCheckAlt></FaMoneyCheckAlt>
                                        Payment History</NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/cart'}>
                                        <FaCartPlus></FaCartPlus>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/review'}>
                                        <MdRateReview></MdRateReview>
                                        Add Review</NavLink>
                                </li>
                                <li className="flex  gap-4">

                                    <NavLink to={'/dashboard/booking'}>
                                        <FaShoppingBag></FaShoppingBag>
                                        My Booking</NavLink>
                                </li></>
                    }
                    {/* //--------------------------- //*/}
                    <div className="divider bg-black h-[0.2rem]"></div>
                    <li className="flex  gap-4">

                        <NavLink to={'/'}>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li className="flex  gap-4">

                        <NavLink to={'/menu'}>
                            <MdMenu></MdMenu>
                            Our Menu</NavLink>
                    </li>
                    <li className="flex  gap-4">

                        <NavLink to={'/food/:category'}>
                            <MdFoodBank></MdFoodBank>
                            Our Foods</NavLink>
                    </li>
                    <li className="flex  gap-4">

                        <NavLink to={'/contact'}>
                            <MdContacts></MdContacts>
                            Contact Us</NavLink>
                    </li>

                </ul>
            </div>
            <div className="p-8 ml-64 flex-1 overflow-y-auto">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;