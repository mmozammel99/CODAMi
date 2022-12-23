import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link,  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Registration = () => {
    const { createUser, LoginWithProvider, addUserInfo, emailVerify,dark } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const navigate = useNavigate();
  
    const handleGoogleLogin = () => {
        LoginWithProvider(googleProvider)
            .then(result => {
                console.log(result);
                toast.success('Registration Successful');
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGithubLogin = () => {
        LoginWithProvider(githubProvider)
            .then(result => {
                console.log(result);
                toast.success('Registration Successful');
                  navigate('/');
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
                emailVerify();
                setError(null);
                toast.success('Registration Successful');
                toast.error('Please Verify your Email');
                  navigate('/');
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    };
    const handleProfileInfoAdd = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        addUserInfo(profile)
            .then(() => { })
    };
    return (
        <>
            <div className= {`h-auto  flex flex-col gap-10 justify-center items-center py-4 ${dark ? "bg-neutral-focus" : "bg-base-200"} ${dark ? "text-base-200" : "text-neutral-focus"}`}>
                <h1 className="text-5xl font-bold ">Registration</h1>
                <div className={`card flex-shrink-0 w-[90%] md:w-[60%] lg:w-[35%]  bg-base-100 shadow-xl rounded-none  ${dark ? "rounded-none" : "rounded-xl"}`} >
                    <form onSubmit={handleCreateUser} className={`card-body  ${dark ? "bg-neutral" : "bg-base-100"} ${dark ? "text-base-100" : "text-neutral-focus"} `}>
                        <div className="form-control">
                            <label className="label">
                                <span className={`label-text ${dark ? "text-base-100" : "text-neutral-focus"}`}>Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered text-neutral-focus" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={`label-text ${dark ? "text-base-100" : "text-neutral-focus"}`}>Photo url</span>
                            </label>
                            <input type="url" name='photoURL' placeholder="Photo url" className="input input-bordered text-neutral-focus" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={`label-text ${dark ? "text-base-100" : "text-neutral-focus"}`}>Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered text-neutral-focus" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={`label-text ${dark ? "text-base-100" : "text-neutral-focus"}`}>Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered text-neutral-focus" required />

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