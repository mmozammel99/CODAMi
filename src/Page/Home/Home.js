import React, { useContext } from 'react';
import img from '../../Assets/bg.png';
import img2 from '../../Assets/bg2.svg';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Feedback from './Feedback';
import Team from './Team';
import Contact from './Contact';
import Apps from './Apps';


const Home = () => {
    const { LoginWithProvider, dark } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () => {
        LoginWithProvider(googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    };
    const handleGithubLogin = () => {
        LoginWithProvider(githubProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    };
    return (
        <>
            <div className={` min-h-screen  pt-5 ${dark ? "bg-neutral-focus" : "bg-base-200"} ${dark ? "text-base-200" : "text-neutral-focus"}`} >
                <div className=" flex flex-col-reverse lg:flex-row  text-center justify-center items-center px-20">
                    <img alt='' src={img} className="w-96 lg:w-[40%]  mx-20" />
                    <div className=' '>
                        <h1 className="text-5xl font-bold">The best way to learn to code</h1>
                        <p className="py-6">Courses designed by experts with real-world practice. Join our global community. </p>
                        <Link to='/courses' className="btn btn-primary">Start Learning now!</Link>
                        <div className="divider mx-40">OR</div>
                        <div className=' flex flex-col lg:flex-row gap-5 w-72 mx-auto'>
                            <button onClick={handleGoogleLogin} className="btn bg-[#D9392B] border-0"><FaGoogle className='text-2xl mr-5' />Google</button>
                            <button onClick={handleGithubLogin} className="btn"><FaGithub className='text-2xl mr-3' />Github</button>
                        </div>
                    </div>
                </div>
                <img src={img2} className="mx-5" alt="" />
                <div className="p-6 py-12 bg-blue-600 text-gray-50">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                                <br className="sm:hidden"/>50% Off
                            </h2>
                            <div className="space-x-2 text-center py-2 lg:py-0">
                                <span> Use code:</span>
                                <span className="font-bold text-lg">CODE50</span>
                            </div>
                            <Link to='/courses' className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-gray-50 border-gray-600">Buy Now</Link>
                        </div>
                    </div>
                </div>
                <Team />
                <Feedback></Feedback>
                <Apps/>
                <Contact />
                <hr/>
               
            </div>
        </>
    );
};

export default Home;