import useAuth from "../../../hooks/useAuth";


const AdminProfle = () => {
    const user = useAuth();
    return (
        <div>

        <div className="hero min-h-screen bg-base-200 w-full">
            <div className="hero-content flex-col lg:flex-row">
                <img src={user?.user?.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{user?.user.displayName}</h1>
                    <h2 className="text-5xl font-bold">{user?.user.email}</h2>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Edit Your Profile</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AdminProfle;