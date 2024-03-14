import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading]= useAdmin();
    if(loading || isAdminLoading){
        return <div className=' w-full text-center min-h-screen'><div className='mx-auto w-1/2'><span className="loading loading-spinner loading-lg text-center mx-auto"></span></div></div>
    }
    if(user && isAdmin){
        return children;

    }
    return <Navigate state={{from : location}}   to={'/login'} replace/>
};

export default AdminRoute;