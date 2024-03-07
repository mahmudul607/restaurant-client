
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png'
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import './Login.css'
import { useForm } from 'react-hook-form';



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { loginUserAccount, signInWithGoogleProvider } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    // -----------------------handle login data here-----------------------------------

    // react hook form
    const onSubmit = (data) => {
        console.log(data)
        const { email, password } = data;
        loginUserAccount(email, password)
            .then(user => {
                console.log(user)
                alert("Login successful")
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                alert(err.message)
            })

    }


    // const handleLoginData = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     console.log(email, password);
    //     loginUserAccount(email, password)
    //         .then(user => {
    //             console.log(user)
    //             alert("Login successful")
    //             navigate(location?.state ? location.state : '/')
    //         })
    //         .catch(err => {
    //             alert(err.message)
    //         })



    // }
    // sign in with google provider using popup window
    const handleSignInWithGooglePopup = () => {

        signInWithGoogleProvider()
            .then(user => {
                console.log(user)
                alert("User signed in successfully")
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                alert(err.message)
            })

    }

    const handleCaptcha = (e) => {
        e.preventDefault();
        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value)) {

            setDisabled(false);
        }

        else {

            setDisabled(true);
        }

    }

    // --------------------------------------------End handle login data----------------- 
    return (
        <div className='login'>
            <div className="hero min-h-screen xxs:block pt-4 bg-base-200 ">
                <div className="hero-content flex-col-reverse md:flex-row border-box box-content  shadow-2xl md:mx-24 mx-2 px-2 md:px-8 ">
                    <div className="text-center md:w-2/5  md:text-left hidden md:block   ">
                        <img src={loginImg} alt="image" />
                    </div>
                    <div className="card w-full  md:w-3/5   shadow-2xl bg-base-100 pb-4 ">
                        <div className="text-center pt-2">
                            <h1 className="text-4xl font-bold">Login</h1>
                        </div>
                        <form className="card-body py-0" onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" {...register("email", { require: true })} className="input input-bordered" required />
                                {errors.email && <span>Email field is required</span>}
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                <input type={show? 'text':'password'} placeholder="password" {...register("password", { require: true})} name="password" className="input input-bordered w-full" />
                                {errors.password?.type === "required" && (
                                    <p role="alert">Password is required</p>
                                )}
                                 <span onClick={()=>setShow(!show)} className="absolute  right-5 top-4">
                                    {
                                        show === true ? <FaEye/> : <FaEyeSlash/>
                                    }
                                    
                                    
                                 </span>
                            </div>
                               

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        <LoadCanvasTemplate /></span>
                                </label>
                                <div className='relative'>
                                    <input type="text" placeholder="Captcha" ref={captchaRef} name="captcha" id='user_captcha_input' className="input input-bordered w-full" required />
                                    <button className='btn btn-outline absolute right-0 border-y-0' onClick={handleCaptcha}>Validate</button>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-4">

                                <input type="submit" className="btn btn-primary" disabled={disabled} value="Submit" />
                            </div>
                            <div>
                                <p>New here? <Link to={'/register'}>Create a New Account</Link></p>
                                <div className='flex pt-6 gap-8 justify-center text-2xl'>
                                    <span className="w-12 h-12 border rounded-full  border-black p-[10px] text-[#4285f4]" onClick={handleSignInWithGooglePopup}><FaGoogle /></span>
                                    <button className="w-12 h-12 border rounded-full  border-black p-[10px] text-[#0866ff]"> <FaFacebookF /></button>
                                    <button className="w-12 h-12 border rounded-full  border-black p-[10px]"> <FaGithub /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;