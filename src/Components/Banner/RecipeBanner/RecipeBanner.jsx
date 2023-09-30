import React from 'react';
import { FaHeart } from 'react-icons/fa';
import Recipe from '../../Recipe/Recipe';
import './RecipeBanner.css'
import { Title } from '../../Title/Title';

const RecipeBanner = ({ recipeDetails }) => {
    console.log(recipeDetails);
    const { _id, chef_name, bio, chef_picture, likes, recipes, recipes_number, year_of_experience } = recipeDetails;
    return (
        <div className='h-screen'>
            <div className="card lg:card-side bg-base-100 shadow-xl m-16">
                <figure><img className='rounded-l-xl w-full h-full' src={chef_picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chef_name}</h2>
                    <p><small>{bio}</small></p>
                    <div className='space-y-0'>
                        <p className='text-lg font-medium'>Year of experience: <span className='font-semibold text-orange-500 '>{year_of_experience}</span></p>
                        <p className='text-lg font-medium'>Total recipes:  <span className='font-semibold text-orange-500'>{recipes_number}</span></p>
                        <div className='text-lg flex items-start gap-2 rounded-lg'>
                            <p className=''>Likes</p>
                            <div className='flex items-center gap-1'>
                                <FaHeart />
                                <span className='font-semibold text-orange-500 '><small>{likes}</small></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Title children={'Name of recipe'}/>
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