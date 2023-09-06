import React, { useEffect, useState } from 'react';
import './Home.css'
import ChefDetails from '../../../Components/ChefDetails/ChefDetails';
import CarouselFood from '../ExtraSection/CarouselFood/FoodGallery';
import Vigitor from '../ExtraSection/CarouselFood/Vigitor';
import { Link } from 'react-router-dom';
import SliderBanner from './Banner/SliderBanner';

const Home = () => {
    const [chefDetails, setChefDetails] = useState([])
    useEffect(() => {
        fetch('https://the-chef-recipe-server-md-rijwan-jannat.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefDetails(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>

            <SliderBanner></SliderBanner>
            <div className='flex-col items-center justify-center'>
                <h2 className='text-center text-3xl md:text-4xl lg:text-5xl flex-wrap justify-center  text-red-600 font-bold my-2 mt-16'>Chef <span className='text-orange-500 font-normal'>information</span> </h2>
                <div className='divider border-2 border-red-400 mb-10'></div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:mx-5 gap-16 '>
                    {
                        chefDetails.map(chefDetail => <ChefDetails
                            key={chefDetail._id}
                            chefDetail={chefDetail}
                        ></ChefDetails>)
                    }
                </div>
            </div>

            <CarouselFood />
            <Vigitor />
        </div>
    )

};

export default Home;