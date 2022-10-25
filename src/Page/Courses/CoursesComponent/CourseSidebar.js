import React from 'react';

const CourseSidebar = ({ course }) => {
    const { logo, name } = course
    return (
        <div div className='flex text-3xl font-bold  justify-center items-center mx-3 my-10 '  >
            <img src={logo} className="mr-1" alt="" />
            {name}</div >
    );
};

export default CourseSidebar;