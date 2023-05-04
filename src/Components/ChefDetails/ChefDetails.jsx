import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

const ChefDetails = ({ chefDetail }) => {
    // console.log(chefDetail)
    const { _id, chef_name, chef_picture, likes, recipes, recipes_number, year_of_experience } = chefDetail;
   
    return (
        <div className=" rounded-xl shadow-lg mb-12 w-96 p-2">
            <figure><img className='w-full lg:h-56 lg:w-full xl:h-72 rounded-xl' src={chef_picture} /></figure>
            <div className="p-3">
                <h1 style={{ fontFamily: 'cursive' }} className='text-3xl font-bold text-red-600'>Mr. {chef_name}</h1>
                <p style={{ fontFamily: 'serif' }} className='text-2xl font-medium'>Year of experience: <span className='font-semibold text-orange-500 '>{year_of_experience}</span></p>
                <p style={{ fontFamily: 'serif' }} className='text-lg font-medium'>Total recipes:  <span className='font-semibold text-orange-500'>{recipes_number}</span></p>
                <div style={{ fontFamily: 'cursive' }} className='text-xl flex justify-between p-2 gap-2 items-center rounded-lg shadow-lg text-red-600 '>
                    <p className='font-bold'>Likes</p>
                    <div className='flex items-center gap-1'>
                        <FaHeart />
                        <span className='font-semibold text-orange-500 pb-1'><small>{likes}</small></span>
                    </div>
                </div>
                <div className="">
                    <Link to={`/recipe/${_id}`} className="btn btn-primary bg-orange-400 hover:bg-red-700 border-none w-full my-2">View Recipe</Link>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;