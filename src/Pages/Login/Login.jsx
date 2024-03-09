
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png'
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import './Login.css'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { loginUserAccount, signInWithGoogleProvider } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const [captchaValue, setCaptchaValue] = useState('');
    const [captchaValidated, setCaptchaValidated] = useState(false);
    // const [captchaReloaded, setCaptchaReloaded] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    // -----------------------handle login data here-----------------------------------

    // react hook form
    const onSubmit = (data) => {
       
       
        setLoginError(null);
        const { email, password } = data;
        loginUserAccount(email, password)
            .then(()=> {
                
               
                setLoginError('success')
                

                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                
               
                setLoginError('Invalid User or Password')
                console.log(err)
            })

    }

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

    useEffect(()=>{

        if (validateCaptcha(captchaValue)) {
            setCaptchaValidated(true);
            setDisabled(false);
        }

        else {
            setCaptchaValidated(false);
            setDisabled(true);
        }

    },[captchaValue])
    useEffect(()=>{

        if (captchaValidated) {
            
            setDisabled(false);
        }

        else {
           
            setDisabled(true);
        }

    },[captchaValidated])



if(document.getElementById('reload_href')){
    document.getElementById('reload_href').addEventListener('click', () => {
        loadCaptchaEnginge(6); // Reload captcha
        
        setCaptchaValidated(false); // Reset captcha validation state
        setDisabled(true); // Disable submit button after reloading captcha
    });

}
   
    const handleCaptcha = (e) => {
        e.preventDefault();
        setCaptchaValue(e.target.value);
       
        


    }


    // handleShowPassword
    
    const handleShowPassword = (e)=>{
        e.preventDefault();
        setShow(!show);
       setLoginError(null)
    }

    // alert
if(loginError === 'success'){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: 'Login Successfully',
        showConfirmButton: false,
        timer: 1500
      });

}
else if(loginError) {
    Swal.fire({
        icon: "error",
        title: "Failed to login", loginError,
        text: loginError,
        
      });
      

}
    

      

    // --------------------------------------------End handle login data----------------- 
    return (
        <div className='login'>
            <Helmet>
            <title>Foods Corner | Login</title>
            </Helmet>
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
                                 <span onClick={handleShowPassword} className="absolute  right-5 top-4 cursor-pointer">
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
                               
                                    <input type="text" onBlur={handleCaptcha} placeholder="Captcha" name="captcha" id='user_captcha_input' className="input input-bordered w-full" required />
                                  
                               
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-4">

                                <input type="submit" className="btn btn-primary" disabled={disabled} value="Submit" />
                            </div>
                            <div>
                                <p>New here? <Link to={'/register'} className='text-green-600 font-semibold'>Create a New Account</Link></p>
                                <div className='flex pt-6 gap-8 justify-center text-2xl'>
                                    <span  className="w-12 h-12 border rounded-full cursor-pointer border-black p-[10px] text-[#4285f4]" onClick={handleSignInWithGooglePopup}><FaGoogle /></span>
                                    <span className="w-12 h-12 border rounded-full cursor-pointer border-black p-[10px] text-[#0866ff]"> <FaFacebookF /></span>
                                    <span className="w-12 h-12 border rounded-full cursor-pointer border-black p-[10px]"> <FaGithub /></span>
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