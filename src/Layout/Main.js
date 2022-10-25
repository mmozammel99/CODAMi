import React from 'react';
import Header from '../Page/SharePage/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/SharePage/Footer';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;