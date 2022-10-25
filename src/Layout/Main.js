import React from 'react';
import Header from '../Page/SharePage/Header';
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;