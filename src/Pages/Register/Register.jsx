import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/others/authentication2.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";


const Register = () => { 
    const {register, handleSubmit, formState: { errors }} = useForm({defaultValues: {
        name: "",
        email: "",
        password: ""
      }})
    const {createUserAccount} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // view password character
    const [show, setShow] = useState(false);
  


  

    const onSubmit = (data) => {
        console.log(data)
        const { email, password } = data;
        createUserAccount(email, password)
            .then(user => {
                console.log(user)
                alert("SignUp successful")
                navigate(location?.state ? location.state : '/login')
            })
            .catch(err => {
                alert(err.message)
            })

    }



    // const handleRegisterData = (e) =>{
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     console.log(name, email, password);
    //     createUserAccount(email, password)
    //     .then(user =>{
    //         console.log(user)
    //         alert("user created successfully")
    //         navigate(location?.state? location.state : '/login')
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //         alert(err.message);
    //     })


    // }
    return  (
        <div className="register">
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
                            <input type={show? 'text':'password'} placeholder="password" name="password" {...register("password", {
                                 required: true,
                                 pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                 minLength: 6, 
                                 maxLength: 20
                                 })} className="input input-bordered  w-full " />
                                 <span onClick={()=>setShow(!show)} className="absolute  right-5 top-4">
                                    {
                                        show === true ? <FaEye/> : <FaEyeSlash/>
                                    }
                                    
                                    
                                 </span>
                            </div>
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
                            
                        </div>
                        <div className="form-control mt-4">
                            
                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                        <div>
                            <p>Already Have an Account? <Link to={'/login'}>Login Here</Link></p>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;