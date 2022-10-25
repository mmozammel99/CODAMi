import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className=" h-screen bg-base-200 flex flex-col gap-10 justify-center items-center ">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="card flex-shrink-0 w-[90%] lg:w-[30%]  bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className=' flex flex-col lg:flex-row gap-3 justify-around w-full mx-auto '>
                            <button className="btn bg-[#D9392B] lg:w-[45%] border-0"><FaGoogle className='text-2xl mr-5' />Google</button>
                            <button className="btn lg:w-[45%]"><FaGithub className='text-2xl mr-3' />Github</button>
                        </div>
                        <p className='text-center mt-3'>Don't have an account? <Link class="link link-primary" to='/registration'>Registration</Link></p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;