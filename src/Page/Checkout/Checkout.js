import React from 'react';
import { useLoaderData } from 'react-router-dom';
import bg from '../../Assets/Payment-Methods.png'
const Checkout = () => {
    const course = useLoaderData()
    const { id, name, img, description, Price } = course
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-base-200">
                <div className="flex flex-col lg:flex-row justify-center items-center w-auto bg-white">
                    <div className="card flex-shrink-0    bg-base-100">
                        <div className="card-body">
                        <h2 className='text-4xl font-bold'>Check Out</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" className="input input-bordered" />
                                <label className="label">

                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Id</span>
                                </label>
                                <input type="text" className="input input-bordered" />
                                <label className="label">

                                </label>
                            </div>
                            <div className='flex gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Country</span>
                                    </label>
                                    <input type="text" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Zip cord</span>
                                    </label>
                                    <input type="text" className="input input-bordered" />
                                </div>
                            </div>
                           
                            <h2 className='mt-1 font-medium'>Payment Mated</h2>
                            <img src={bg} className='w-96' alt="" />
                            <div className="form-control">
                                <input type="number" placeholder='Card Number' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder='Name on Card' className="input input-bordered" />
                            </div>
                            <div className='flex gap-2'>
                                <div className="form-control">
                                    <input type="text" placeholder='MM / YY' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder='Security cord' className="input input-bordered" />
                                </div>
                            </div>
                            <p><input type="checkbox" checked className="checkbox checkbox-xs" /> Remember this card</p>
                        </div>
                    </div>


                    <div className="card w-96 bg-base-100 justify-center items-center mb-5 ">
                        <figure className="px-10 pt-10">

                            <figure><img src={img} alt="Movie" /></figure>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <p className='text-justify'>{description}</p>
                            <div className="card-actions">
                                <button className='btn btn-primary w-full'><input type="radio" class="radio radio-primary btn-outline mr-1" checked />Price only {Price}</button>
                            </div>
                        </div>
                        <div className="form-control">

                            <label className="input-group">
                                <input type="text" placeholder="Voucher Code" className="input input-bordered" />
                                <span>Apply</span>
                            </label>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">

                                <tbody>
                                    <tr>
                                        <td>Course Price </td>
                                        <td> {Price}</td>
                                    </tr>
                                    <tr>
                                        <td>Tax </td>
                                        <td> 0</td>
                                    </tr>
                                    <tr>
                                        <td>Voucher </td>
                                        <td> 0</td>
                                    </tr>
                                    <tr>
                                        <th>Total </th>
                                        <th> {Price}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                            <button className='btn'>Buy now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;