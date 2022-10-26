import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Courses from '../Page/Courses/Courses';
import FAQ from '../Page/FAQ/FAQ';
import Home from '../Page/Home/Home';
import Login from '../Page/Login/Login';
import Blog from '../Page/Blog/Blog';
import Registration from '../Page/Registration/Registration';
import Error from '../Page/SharePage/Error';
import CourseDetails from '../Page/Courses/CourseDetails/CourseDetails';
import Checkout from '../Page/Checkout/Checkout';
import PrivetRouter from './PrivetRouter/PrivetRouter';
import Profile from '../Page/Profile/Profile';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ()=> fetch('http://localhost:5000/courses')
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile',
                element: <PrivetRouter><Profile></Profile></PrivetRouter>
            },
        
            {
                path: '/checkout/:id',
                element:<PrivetRouter> <Checkout ></Checkout></PrivetRouter>,
                loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
            },
        ]
    },
    {
        path:'/*',
        element:<Error></Error>
    }
])
