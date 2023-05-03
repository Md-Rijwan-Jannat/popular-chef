import React from 'react';
import { FaHeart } from 'react-icons/fa';
import Recipe from '../Recipe/Recipe';

const RecipeBanner = ({ recipeDetails }) => {
    console.log(recipeDetails);
    const { _id, chef_name, bio, chef_picture, likes, recipes, recipes_number, year_of_experience } = recipeDetails;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-16">
                <figure><img className='rounded-xl w-full h-full' src={chef_picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chef_name}</h2>
                    <p><small>{bio}</small></p>
                    <p style={{ fontFamily: 'serif' }} className='text-2xl font-medium'>Year of experience: <span className='font-semibold text-orange-500 '>{year_of_experience}</span></p>
                    <p style={{ fontFamily: 'serif' }} className='text-lg font-medium'>Total recipes:  <span className='font-semibold text-orange-500'>{recipes_number}</span></p>
                    <div style={{ fontFamily: 'cursive' }} className='text-xl flex justify-between p-2 gap-2 items-center rounded-lg shadow-lg text-red-600 '>
                        <p className='font-bold'>Likes</p>
                        <div className='flex items-center gap-1'>
                            <FaHeart />
                            <span className='font-semibold text-orange-500 pb-1'><small>{likes}</small></span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-3xl text-orange-500 text-center my-10 font-semibold'>Name of <span className='text-red-600 font-bold'>recipe</span></h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>

                    {
                        recipes.map(rec => <Recipe
                            key={rec.id}
                            rec={rec}
                        ></Recipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RecipeBanner;