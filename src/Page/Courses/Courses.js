import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div>
            <p>{courses.length}</p>
        </div>
    );
};

export default Courses;