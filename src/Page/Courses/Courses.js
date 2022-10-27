import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import CourseCard from './CoursesComponent/CourseCard';
import CourseSidebar from './CoursesComponent/CourseSidebar';

const Courses = () => {
    const courses = useLoaderData();
    const {dark} =useContext(AuthContext);
    return (
        <>
            <div className={`flex flex-col lg:flex-row ${dark ? "bg-neutral-focus":"bg-base-200"} ${dark ? "text-base-200":"text-neutral-focus"}`}>
                <div className= {`px-12 ${dark?" bg-neutral":" bg-white"}  pt-5`}>
                    {
                        courses.map(course => <CourseSidebar
                            key={course.id}
                            course={course}
                        ></CourseSidebar>)
                    }
                </div>               
                <div className='flex flex-wrap justify-center items-center gap-10 py-5 '>
                {
                        courses.map(course => <CourseCard
                            key={course.id}
                            course={course}
                        ></CourseCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default Courses;