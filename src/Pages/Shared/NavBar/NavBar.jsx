import { Link } from "react-router-dom";
import './NavBar.css'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";


const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const navOptions = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/food/offer'}>Our Foods</Link></li>
        <li><Link to={'/'}>About</Link></li>
        




    </>

    const handleLogOut = () => {
        logOutUser();
    }
    return (
        <div className="navbar w-screen fixed z-10 bg-opacity-30 max-w-screen-xl  bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        {
                            navOptions
                        }
                        {/* responsive avatar start */}
                            <div className="min-[301px]:hidden">
                                {
                                    user ? <div className="dropdown dropdown-end ">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-sm   mt-3 z-[1] p-2 shadow bg-black bg-opacity-50 text-white rounded-box ">
                                            <li>
                                                <a className="justify-between">

                                                    {user.displayName}

                                                </a>
                                            </li>
                                            <li>
                                                <a className="justify-between">

                                                    {user.email}

                                                </a>
                                            </li>
                                            <li><a>Settings</a></li>
                                            <li><button className="btn btn-outline mx-2 text-white" onClick={handleLogOut}>Logout</button></li>
                                        </ul>
                                    </div>
                                        :
                                        <><Link className="btn btn-outline text-white" to={'/login'}>Login</Link></>
                                }
                            </div>
                        {/* responsive avatar end */}
                    </ul>
                </div>
                <a className="btn btn-ghost text-4xl mb-2 ">
                    <h1 className="text-2xl font-extrabold ">Foods<br /> <span className="text-yellow-600 pl-8">Corner</span></h1>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navOptions
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="cart-section pr-4">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-md -top-1 indicator-item bg-transparent text-white border-0">{cart.length}</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-black bg-opacity-50 text-white  shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">Items: {cart.length}</span>
                                <span className="">Subtotal: ${totalPrice}</span>
                                <div className="card-actions">
                                    <Link to={'/dashboard/cart'} className="btn btn-primary btn-block">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-[300px]:hidden">
                    {
                        user ? <div className="dropdown dropdown-end ">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-50 text-white rounded-box ">
                                <li>
                                    <a className="justify-between">

                                        {user.displayName}

                                    </a>
                                </li>
                                <li>
                                    <a className="justify-between">

                                        {user.email}

                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><button className="btn btn-outline mx-2 text-white" onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div>
                            :
                            <><Link className="btn btn-outline text-white" to={'/login'}>Login</Link></>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;