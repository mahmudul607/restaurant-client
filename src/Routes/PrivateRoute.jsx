import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div className=' w-full text-center min-h-screen'><div className='mx-auto w-1/2'><span className="loading loading-spinner loading-lg text-center mx-auto"></span></div></div>
    }
    if(user){
        return children;

    }
    return <Navigate state={location.pathname}   to={'/login'} replace/>
};

export default PrivateRoute;