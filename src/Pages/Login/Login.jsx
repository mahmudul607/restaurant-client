
import { Link } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';



const Login = () => {

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const handleLoginData = (e) =>{
        e.preventDefault();
        let user_captcha_value = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha_value)==true) {
            console.log('captcha Matched')
        }
   
        else {
            alert('Captcha Does Not Match');
        } 
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log( email, password);


    }
    return (
        <div className="hero  bg-base-200 ">
            <div className="hero-content flex-col-reverse lg:flex-row border-box box-content  shadow-2xl  md:mx-24 md:px-8 my-4">
                <div className="text-center lg:w-1/2 lg:text-left">
                    
                   <img src={loginImg} alt="image" />
                </div>
                <div className="card w-full  lg:w-1/2  shadow-2xl bg-base-100 pb-4 ">
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
                            <input type="text" placeholder="Captcha" name="captcha" id='user_captcha_input' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            
                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                        <div>
                            <p>New here? <Link to={'/register'}>Create a New Account</Link></p>
                            <div className='flex pt-6 gap-8 justify-center text-2xl'>
                                <button className="w-12 h-12 border rounded-full  border-black p-[10px] text-[#4285f4]"><FaGoogle /></button>
                                <button className="w-12 h-12 border rounded-full  border-black p-[10px] text-[#0866ff]"> <FaFacebookF/></button>
                                <button className="w-12 h-12 border rounded-full  border-black p-[10px]"> <FaGithub/></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;