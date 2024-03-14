import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['email'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleDelete = (user) =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }

                    })

            }
        });

    }
    const handleMakeAdmin = user =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                .then(res=>{
                    if(res.data.modifiedCount > 0){
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${user.name} is an admin now!`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })

            }

        })
        
        
    }

    return (
        <div className="p-6">
            <SectionTitle
                subHeader="How Many?"
                header="Manage All Users"
            > </SectionTitle>
            <div className="text-2xl p-4 my-4">All Users:{users.length}</div>
            <div>
               
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-gray-400 text-lg py-4">
                            <tr className="uppercase">
                                <th className="rounded-tl-2xl"></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th className="rounded-tr-2xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                    users.map((user, index )=><tr key={user._id}>
                        <th>{index + 1}</th>
                        <td>{user.name? user.name:'User'}</td>
                        <td>{user.email}</td>
                        <td>
                             {
                                user.role === 'admin'? "Admin":
                                <button className="btn btn-ghost bg-gray-400" onClick={()=>handleMakeAdmin(user)}>
                                <FaUsers className="text-green-700 text-2xl "></FaUsers>
                                </button>
                             }
                        </td>
                        <td>
                            <button className="btn btn-ghost bg-red-500" onClick={()=>handleDelete(user)}>
                                <RiDeleteBin6Line className="text-white text-2xl"></RiDeleteBin6Line>
                            </button>
                        </td>
                    </tr> )
                }
                           
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default AllUsers;