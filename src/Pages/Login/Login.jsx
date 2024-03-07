
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import './Login.css'



const Login = () => {
    const { signInAccountWithEmailAndPassword, signInWithGoogleProvider } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLoginData = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signInAccountWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
                alert("Login successful")
            })
            .catch(err => {
                alert(err.message)
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
    return (
        <div className='login'>
            <div className="hero xxs:block pt-4 bg-base-200 ">
                <div className="hero-content flex-col-reverse md:flex-row border-box box-content  shadow-2xl md:mx-24 mx-2 px-2 md:px-8 my-4">
                    <div className="text-center md:w-2/5  md:text-left hidden md:block   ">

                        <img src={loginImg} alt="image" />
                    </div>
                    <div className="card w-full  md:w-3/5   shadow-2xl bg-base-100 pb-4 ">
                        <div className="text-center pt-2">
                            <h1 className="text-4xl font-bold">Login</h1>
                        </div>
                        <form className="card-body py-0" onSubmit={handleLoginData}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

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