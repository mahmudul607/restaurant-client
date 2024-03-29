
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuth();
    if(loading){
        return <div className=' w-full text-center min-h-screen'><div className='mx-auto w-1/2'><span className="loading loading-spinner loading-lg text-center mx-auto"></span></div></div>
    }
    if(user){
        return children;

    }
    return <Navigate state={{from : location}}   to={'/login'} replace/>
};

export default PrivateRoute;