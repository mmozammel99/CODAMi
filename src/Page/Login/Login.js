import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
    const { login, LoginWithProvider, setLoader } = useContext(AuthContext)
    const [error, setError] = useState(null)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        LoginWithProvider(googleProvider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGithubLogin = () => {
        LoginWithProvider(githubProvider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })
    }


    const handleEmailWithLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then(result => {
                setError(null)
                console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            })
            .finally(() => {
                setLoader(false)
            })

    }
    return (
        <>
            <div className=" h-screen bg-base-200 flex flex-col gap-10 justify-center items-center ">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="card flex-shrink-0 w-[90%] md:w-[60%] lg:w-[30%]  bg-base-100 shadow-xl ">
                    <form onSubmit={handleEmailWithLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <p className='text-error' >{error}</p>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className=' flex flex-col lg:flex-row gap-3 justify-around w-full mx-auto '>
                            <button onClick={handleGoogleLogin} className="btn bg-[#D9392B] lg:w-[45%] border-0"><FaGoogle className='text-2xl mr-5' />Google</button>
                            <button onClick={handleGithubLogin} className="btn lg:w-[45%]"><FaGithub className='text-2xl mr-3' />Github</button>
                        </div>
                        <p className='text-center mt-3'>Don't have an account? <Link className="link link-primary" to='/registration'>Registration</Link></p>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Login;