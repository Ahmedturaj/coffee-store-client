
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';
import login from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
const SignUp = () => {
    const {createUser}=useContext(AuthContext);
const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))

}

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='mt-5' src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp}  className="card-body">
                            <h1 className="text-5xl font-bold mb-10">Please SignUp!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <hr />
                        <div className="text-center"> <p>Or</p><br />
                            <p><small>Login With</small></p></div>

                        <div className="flex items-center gap-2 justify-center">
                            <button className='  mb-5 btn btn-circle btn-outline'> <FaGoogle></FaGoogle></button>
                            <button className='  mb-5 btn btn-circle btn-outline'><FaFacebook></FaFacebook> </button>
                            <button className='  mb-5 btn btn-circle btn-outline'><FaInstagram></FaInstagram> </button>
                        </div>
                        <p className='text-center mb-8'>
                            <small></small>Already have an account ?<Link to='/login' className='text-orange-400 '> Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;