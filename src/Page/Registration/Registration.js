import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <>
              <div className=" h-auto  bg-base-200 flex flex-col gap-10 justify-center items-center py-4 ">
                <h1 className="text-5xl font-bold ">Registration</h1>
                <div className="card flex-shrink-0 w-[90%] md:w-[60%] lg:w-[35%]  bg-base-100 shadow-xl  ">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="url" placeholder="Photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                            
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className=' flex flex-col lg:flex-row gap-3 justify-around w-full mx-auto '>
                            <button className="btn bg-[#D9392B] lg:w-[45%] border-0"><FaGoogle className='text-2xl mr-5' />Google</button>
                            <button className="btn  lg:w-[45%]"><FaGithub className='text-2xl mr-3' />Github</button>
                        </div>
                        <p className='text-center mt-3'>Already have an account? <Link class="link link-primary" to='/login'>Log In</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;