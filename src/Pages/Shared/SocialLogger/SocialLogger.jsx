import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const SocialLogger = () => {
    const { signInWithGoogleProvider } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    let from = location.state?.from?.pathname || "/";

        // sign in with google provider using popup window
        const handleSignInWithGooglePopup = () => {

            signInWithGoogleProvider()
                .then(result => {
                    const userInfo ={
                        email: result.user.email,
                        name: result.user.displayName
                    }
                    axiosPublic.post('/users',userInfo )
                    .then(()=>{
                        
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: 'Login Successfully',
                                showConfirmButton: false,
                                timer: 1500
                              });
                            navigate(from, { replace: true });

                        
                       
                       
                        
                    })
                 
                    
                })
                .catch(err => {
                    alert(err.message)
                })
    
        }
    return (
        <div className='flex pt-6 gap-2 sm:gap-8 justify-center sm:text-2xl text-xl'>
            <span className="sm:w-12 w-8 h-8 sm:h-12  border rounded-full cursor-pointer border-black p-[4px] sm:p-[10px] text-[#4285f4]" onClick={handleSignInWithGooglePopup}><FaGoogle /></span>
            <span className="sm:w-12 w-8 h-8 sm:h-12  border rounded-full cursor-pointer border-black p-[4px] sm:p-[10px] text-[#4285f4]"> <FaFacebookF /></span>
            <span className="sm:w-12 w-8 h-8 sm:h-12   border rounded-full cursor-pointer border-black p-[4px] sm:p-[10px] text-[#4285f4]"> <FaGithub /></span>
        </div>
    );
};

export default SocialLogger;