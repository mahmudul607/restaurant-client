import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/others/authentication2.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import SocialLogger from "../Shared/SocialLogger/SocialLogger";

import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const Register = () => {
const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })
    const { createUserAccount } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // view password character
    const [show, setShow] = useState(false);
    const [passwordQuality, setPasswordQuality] = useState(null)


      
    const validatePassword = (value) => {
        // Check for uppercase, lowercase, and number
        // let score = 0;
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;
        const numberRegex = /\d/;
        const specialCharacterRegex = /(?=.*?[#?!@$%^&*-])/;

        if(!upperCaseRegex.test(value)) {
            // score++;
            return "Must include at least one uppercase letter";
        }

        if(!lowerCaseRegex.test(value)) {
            // score++;
            return "Must include at least one lowercase letter";
        }

        if (!numberRegex.test(value)) {
            // score++;
            return "Must include at least one number";
        }
        if(!specialCharacterRegex.test(value)) {
            // score++;
            return "Must include at least one Special character such as(#?!@$%^&*-)";
        }


        // if (score >= 3) {
        //     return "strong";
        // } else if (score >= 2) {
        //     return "good";
        // }  else if (score >= 1) {
        //     return "weak";
        // } else {
        //     return "very weak"; // Password is too short
        // }
        return true;

         // Return true if all requirements are met
    };
  

    const calculatePasswordQuality = (value)=>{
       
        let score = 0;
        const passwordLength = value.length;
        const numberRegex = /\d/;
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;
        const specialCharacterRegex = /(?=.*?[#?!@$%^&*-])/;
        if(passwordLength >= 8){
            score += 1;

        }
        if (numberRegex.test(value)) {
            score+=1;
        
        }
        if(upperCaseRegex.test(value)) {
            score+=1;
            
        }

        if(lowerCaseRegex.test(value)) {
            score+=1;
          
        }
        if(specialCharacterRegex.test(value)) {
            score+=1;
           
        }


        if (score >= 5) {
            return "strong";
        } else if (score >= 4) {
            return "good";
        }  else if (score >= 3) {
            return "weak";
        } else if(score >= 2) {
            return "very weak"; // Password is too short
        }else{
            return 
        }

    }
 


    const onSubmit = (data) => {
       
        const { email, password } = data;
        createUserAccount(email, password)
            .then(result => {
                const userInfo ={
                    email: result.user?.email,
                    name: result.user?.displayName,


                }
                axiosPublic.post('/users', userInfo)
                
                .then(res=>{
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: 'SignUp Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          });
                        
                        navigate(location?.state ? location.state : '/login')
                    }
                    
                })
               
               
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Failed to Register",
                    text: err.message
                    
                  });
            })

    }

    const handlePasswordChange = (event)=>{
        const password = event.target.value;
        // const password = watch("password");
        const quality = calculatePasswordQuality(password);
        setPasswordQuality(quality)
        
    }



    // const handlePasswordChange = () =>{
    //     console.log('hello changed')
    // }
    return (
        <div className="register">
            <Helmet>
                <title>Foods Corner | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen xxs:block pt-4 bg-base-200 ">
                <div className="hero-content pb-16 flex-col-reverse md:flex-row-reverse border-box box-content  shadow-2xl   md:mx-24 md:px-8 mx-2 px-2 ">
                    <div className="text-center md:w-2/5 md:text-left hidden md:block">

                        <img src={loginImg} alt="image" />
                    </div>
                    <div className="card w-full md:pt-4  md:w-3/5  shadow-2xl bg-base-100 pb-24 ">
                        <div className="text-center pt-2">
                            <h1 className="text-4xl font-bold">Sign Up</h1>
                        </div>
                        <form className="card-body py-0" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="Name" name="name" {...register("name", { required: true })} className="input input-bordered" />
                                {errors.name?.type === "required" && (
                                    <p role="alert" className="text-red-600">Name is required</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email?.type === "required" && (
                                    <p role="alert" className="text-red-600">Email is required</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input  type={show ? 'text' : 'password'} placeholder="password" name="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        validate: validatePassword
                                    })}
                                    onChange={handlePasswordChange}
                                     className="input input-bordered  w-full " />
                                    <span onClick={() => setShow(!show)} className="absolute  right-5 top-4">
                                        {
                                            show === true ? <FaEye /> : <FaEyeSlash />
                                        }


                                    </span>
                                </div>
                                
                                     {passwordQuality && (
                                        <p className={` text-${passwordQuality === "weak" ? "red" : passwordQuality === "strong" ? "green" : passwordQuality === "good"? "yellow" : "orange"}-600`}>
                                             {passwordQuality}
                                        </p>
                                    )}
                                
                                {errors.password?.type === "required" && (
                                    <p role="alert" className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p role="alert" className="text-red-600">Must be includes all requirements for a Strong password</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p role="alert" className="text-red-600">Password Must be at least 6 character</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p role="alert" className="text-red-600">Password Must be less then 20 character</p>
                                )}
                                {errors.password?.message && (
                                    <p role="alert" className="text-red-600">{errors.password.message}</p>
                                )}

                            </div>
                            <div className="form-control mt-4">

                                <input type="submit" className="btn btn-primary" value="Submit" />
                            </div>
                            <div>
                                <p>Already Have an Account? <Link to={'/login'} className="text-green-600 font-semibold">Login Here</Link></p>
                                    <SocialLogger></SocialLogger>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;