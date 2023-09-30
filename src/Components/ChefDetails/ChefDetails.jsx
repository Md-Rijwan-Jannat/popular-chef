import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

const ChefDetails = ({ chefDetail }) => {
    // console.log(chefDetail)
    const { _id, bio, chef_name, chef_picture, likes, recipes, recipes_number, year_of_experience } = chefDetail;

    return (
        <div className="product-card">
            <div className="badge">Hot</div>
            <div className="product-tumb">
                <img className='rounded h-[180px]' src={chef_picture} alt="" />
            </div>
            <div className="product-details">
                <span className="product-catagory flex"><span className='text-rose-500 mr-2'>{year_of_experience}</span> Year of experience</span>
                <h4><a href="">{chef_name}</a></h4>
                <p> {bio}</p>
               <div className='flex justify-between items-center product-bottom-details'>
                    <div className="product-price flex items-center gap-2"><small>$96.00</small>$230.99</div>
                    <Link className='text-gray-600 absolute bottom-5 right-5 border rounded px-3 py-2 hover:text-gray-100 hover:bg-[#FBB72C] bg-gray-200 hover:border hover:border-gray-400' to={`/recipe/${_id}`}>See Details</Link>
               </div>
            </div>
        </div>

    );
};

export default ChefDetails;