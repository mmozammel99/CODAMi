import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import { ImBooks ,ImPrinter} from "react-icons/im";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [8.3,11.7]
};

const CourseDetails = () => {
    const course = useLoaderData()
    console.log(course);
    const { id, name, details, time,  video } = course
    return (
        <>
            <div  className="hero min-h-screen bg-base-200">
                <div ref={ref}  className="hero-content text-center">
                    <div className="max-w-2xl ">
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <div className="divider"></div>
                        <div className='flex justify-between ' >
                            <p className='flex  items-center gap-1'><FaRegClock />{time}</p>
                            <p className='flex  items-center gap-1'><ImBooks />{video}</p>
                            <Pdf targetRef={ref} filename="CourseDetails.pdf" options={options} x={.6} y={1}>
                                {({ toPdf }) => <button className=' text-xl' onClick={toPdf}><ImPrinter/></button>}
                            </Pdf>
                        </div>

                        <p  className="py-6 text-justify">{details}</p>
                        <Link to={`/checkout/${id}`} className="btn btn-secondary">Get premium access</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetails;