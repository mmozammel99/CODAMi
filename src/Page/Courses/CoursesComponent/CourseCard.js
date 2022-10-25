import React from 'react';
import { FaRegClock } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { Link } from 'react-router-dom';
const CourseCard = ({ course }) => {
    const {id, name, img, description, time, Price, video } = course
    return (
        <div>
            <div className="card card-compact w-80 lg:w-96  bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}
                        <div class="badge  badge-lg">{Price}</div></h2>
                    <p>{description}</p>
                    <div className="card-actions flex-col lg:flex-row items-center">
                        <div className='flex gap-16 lg:gap-12 lg:mr-4 ' >
                            <p className='flex  items-center gap-1'><FaRegClock />{time}</p>
                            <p className='flex  items-center gap-1'><ImBooks />{video}</p>
                        </div>
                        <Link to={`/course/${id} `}className="btn btn-primary">Learn more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;