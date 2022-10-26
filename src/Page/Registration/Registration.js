import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Registration = () => {
    const { createUser, LoginWithProvider, addUserInfo, emailVerify } = useContext(AuthContext)
    const [error, setError] = useState(null)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

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


    const handleCreateUser = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                handleProfileInfoAdd(name, photoURL);
                emailVerify()
                setError(null)
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    const handleProfileInfoAdd = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        addUserInfo(profile)
            .then(() => { })
    }
    return (
        <>
            <div className=" h-auto  bg-base-200 flex flex-col gap-10 justify-center items-center py-4 ">
                <h1 className="text-5xl font-bold ">Registration</h1>
                <div className="card flex-shrink-0 w-[90%] md:w-[60%] lg:w-[35%]  bg-base-100 shadow-xl  ">
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="url" name='photoURL' placeholder="Photo url" className="input input-bordered" required />
                        </div>
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

                        </div>
                        <p className='text-error'>{error}</p>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Registration</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className=' flex flex-col lg:flex-row gap-3 justify-around w-full mx-auto '>
                            <button onClick={handleGoogleLogin} className="btn bg-[#D9392B] lg:w-[45%] border-0"><FaGoogle className='text-2xl mr-5' />Google</button>
                            <button onClick={handleGithubLogin} className="btn  lg:w-[45%]"><FaGithub className='text-2xl mr-3' />Github</button>
                        </div>
                        <p className='text-center mt-3'>Already have an account? <Link className="link link-primary" to='/login'>Log In</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Registration;