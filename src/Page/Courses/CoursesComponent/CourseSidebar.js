import React from 'react';
import { Link } from 'react-router-dom';

const CourseSidebar = ({ course }) => {
    const { id, logo, name } = course;
    return (
        <Link to={`/course/${id} `} div className='flex text-3xl font-bold   items-center mx-3 my-10 '  >
            <img src={logo} className="mr-1" alt="" />
            {name}
        </Link >
    );
};

export default CourseSidebar;