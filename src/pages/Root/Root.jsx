import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl'>
                <Navbar></Navbar>
            </div>
            <div className='mx-auto max-w-7xl mb-6 mt-6'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
