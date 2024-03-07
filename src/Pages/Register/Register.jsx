import { Link } from "react-router-dom";
import loginImg from '../../assets/others/authentication2.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {createAccountWithEmailAndPassword} = useContext(AuthContext);

    const handleRegisterData = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);
        createAccountWithEmailAndPassword(email, password)
        .then(user =>{
            console.log(user)
            alert("user created successfully")
        })
        .catch(err =>{
            console.log(err);
            alert(err.message);
        })


    }
    return (
        <div className="hero xxs:block pt-4 bg-base-200 ">
            <div className="hero-content py-0  flex-col-reverse md:flex-row-reverse border-box box-content  shadow-2xl mx-2 px-2  md:mx-24 md:px-8 my-4">
                <div className="text-center md:w-2/5 md:text-left hidden md:block">
                    
                   <img src={loginImg} alt="image" />
                </div>
                <div className="card w-full  md:w-3/5  shadow-2xl bg-base-100 pb-4 ">
                <div className="text-center pt-2">
                <h1 className="text-4xl font-bold">Sign Up</h1>
                </div>
                    <form className="card-body py-0" onSubmit={handleRegisterData}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
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
    );
};

export default Register;