import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import bg from '../../Assets/Payment-Methods.png'
import { AuthContext } from '../../Context/UserContext';


const Checkout = () => {
    const { user, dark } = useContext(AuthContext);
    const course = useLoaderData();
    const { name, img, description, Price, logo } = course;

// Hot tost btn
    const handleBuy = () => {
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full ${dark ? "bg-neutral-focus" : "bg-base-100"} ${dark ? "text-gray-100" : "text-neutral-focus"} shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`} >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                            <img
                                className="h-10 w-10 rounded-full"
                                src={logo}
                                alt=""
                            />
                        </div>
                        <div className="ml-3 flex-1">
                            <p className={`text-sm font-medium ${dark ? "text-gray-100" : "text-neutral-focus"}`}>
                            Congratulation {user?.displayName}
                            </p>
                            <p className={`mt-1 text-sm ${dark ? "text-gray-100" : "text-neutral-focus"}`}>
                                Successfully purses {name} Course
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary">
                        Close
                    </button>
                </div>
            </div>
        ))
    };

    return (
        <>
            <div className={`flex justify-center items-center  ${dark ? "bg-neutral-focus" : "bg-base-200"} ${dark ? "text-gray-100" : "text-neutral-focus"} py-5`}>
                <div className={`flex flex-col lg:flex-row justify-center items-center w-auto shadow-xl ${dark ? "bg-neutral" : "bg-base-100"} `}>

                    {/* Payment Info */}

                    <div className={`lg:card lg:flex-shrink-0 w-[90%] lg:w-auto  ${dark ? "bg-neutral" : "bg-base-100"} ${dark ? "text-gray-100" : "text-neutral-focus"}`}>
                        <form className="lg:card-body">
                            <h2 className='text-4xl font-bold'>Check Out</h2>
                            <div className="form-control text-neutral-focus">
                                <label className="label">
                                    <span className={`label-text ${dark ? "text-gray-100" : "text-neutral-focus"}`} >Name</span>
                                </label>
                                <input type="text" name='name' defaultValue={user?.displayName} readOnly className="input input-bordered text-neutral-focus" />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control text-neutral-focus">
                                <label className="label">
                                    <span className={`label-text ${dark ? "text-gray-100" : "text-neutral-focus"}`}>Email</span>
                                </label>
                                <input type="email" name='email' defaultValue={user?.email} readOnly className="input input-bordered text-neutral-focus" />
                            </div>
                            <div className="form-control text-neutral-focus">
                                <label className="label">
                                    <span className={`label-text ${dark ? "text-gray-100" : "text-neutral-focus"}`}>User Id</span>
                                </label>
                                <input type="text" name='uid' defaultValue={user?.uid} readOnly className="input input-bordered text-neutral-focus" />
                                <label className="label">
                                </label>
                            </div>
                            <div className='flex flex-col text-neutral-focus lg:flex-row gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className={`label-text ${dark ? "text-gray-100" : "text-neutral-focus"}`}>Country</span>
                                    </label>
                                    <input type="text" defaultValue='Bangladesh' className="input input-bordered text-neutral-focus" />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className={`label-text ${dark ? "text-gray-100" : "text-neutral-focus"}`}>Zip cord</span>
                                    </label>
                                    <input type="text" defaultValue='1210' className="input input-bordered text-neutral-focus" />
                                </div>
                            </div>
                            {/* payment method info */}
                            <h2 className='mt-1 font-medium'>payment method</h2>
                            <img src={bg} className='w-96' alt="" />
                            <div className="form-control mt-3">
                                <input type="number" placeholder='Card Number' className="input input-bordered text-neutral-focus" />
                            </div>
                            <div className="form-control mt-3">
                                <input type="text" placeholder='Name on Card' className="input input-bordered text-neutral-focus" />
                            </div>
                            <div className='flex flex-col lg:flex-row'>
                                <div className="form-control lg:mr-2 mt-3">
                                    <input type="text" placeholder='MM / YY' className="input input-bordered text-neutral-focus" />
                                </div>
                                <div className="form-control mt-3">
                                    <input type="text" placeholder='Security cord' className="input input-bordered text-neutral-focus " />
                                </div>
                            </div>
                            <p><input type="checkbox" className="checkbox checkbox-xs mt-3" /> Remember this card</p>
                        </form>
                    </div>

                    {/* Product info */}

                    <div className='card w-96 bg-base-100 justify-center items-center text-neutral-focus rounded-none'>
                        <figure className="px-10 pt-10">
                            <figure><img src={img} alt="Movie" /></figure>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <p className='text-justify'>{description}</p>
                            <div className="card-actions">
                                <button className='btn btn-outline btn-primary w-full'><input type="radio" className="radio radio-primary  mr-1" checked />Price only {Price}</button>
                            </div>
                        </div>

                        {/* Buy info */}
                        <div className="form-control mb-3">

                            <label className="input-group">
                                <input type="text" placeholder="Voucher Code" className="input input-bordered text-neutral-focus " />
                                <span className="btn btn-primary">Apply</span>
                            </label>
                        </div>
                        <div className="overflow-x-auto ">
                            <table className="table w-full  text-neutral-focus">
                                <tbody>
                                    <tr>
                                        <td>Course Price </td>
                                        <td>+</td>
                                        <td> {Price}</td>
                                    </tr>
                                    <tr>
                                        <td>Tax </td>
                                        <td>+</td>
                                        <td> 0</td>
                                    </tr>
                                    <tr>
                                        <td>Voucher </td>
                                        <td>-</td>
                                        <td> 0</td>
                                    </tr>
                                    <tr>
                                        <th>Total </th>
                                        <td> = </td>
                                        <th> {Price}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Link to='/payment-complete' className={`btn my-3 ${dark?"btn-primary": ""}`} onClick={handleBuy}>Buy now</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;