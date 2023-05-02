import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Share/Header/Header';
import Footer from '../../Pages/Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;