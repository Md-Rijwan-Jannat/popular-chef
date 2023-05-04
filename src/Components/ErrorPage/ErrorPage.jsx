import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div style={{ height: '100vh' }} className='bg-gray-100 grid justify-center'>
            <div className='rounded-xl mt-5 lg:mt-36 bg-white shadow-lg p-10 lg:flex lg:gap-8' style={{height:'50vh'}}>
                <div className='grid items-center'>
                    <h2 style={{fontFamily:'serif'}} className='text-xl md:text-4xl text-green-500 mb-3'>Not Found</h2>
                    <h1 style={{fontFamily:'fantasy'}} className='text-4xl md:text-7xl font-extrabold text-red-600 '>404</h1>
                    <h3 style={{fontFamily:'cursive'}} className='text-lg md:text-3xl text-green-500 mb-8'>Something went <br /> <span className="font-bold text-red-700">WRONG !</span></h3>
                    <Link to={'/'} className='flex items-center gap-2 bg-red-700 p-3 text-white rounded-lg hover:bg-red-600 text-xl font-bold'>Go home page <FaHome/> </Link>
                </div>
                <div className='mt-10'>
                    <img style={{height:'300px'}} className='bg-white' src="https://st2.depositphotos.com/1364916/10256/v/950/depositphotos_102568800-stock-illustration-3d-people-question-mark-logo.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
