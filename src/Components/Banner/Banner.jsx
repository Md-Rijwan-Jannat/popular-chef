import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeBanner from './RecipeBanner/RecipeBanner';

const Banner = () => {
    let chefData = useLoaderData()
    console.log(chefData)
    return (
        <div>
            {
                chefData.map(recipeDetails => <RecipeBanner 
                key={recipeDetails._id}
                recipeDetails={recipeDetails}
                ></RecipeBanner>)
            }
        </div>
    );
};

export default Banner;