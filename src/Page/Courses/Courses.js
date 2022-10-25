import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CoursesComponent/CourseCard';
import CourseSidebar from './CoursesComponent/CourseSidebar';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <>
            <div className='flex flex-col lg:flex-row bg-base-200 '>
                <div className=' px-12 bg-white shadow-xl pt-5'>
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