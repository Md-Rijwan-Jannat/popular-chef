import React, { useEffect, useState } from 'react';
import './Home.css'
import ChefDetails from '../../../Components/ChefDetails/ChefDetails';
import CarouselFood from '../ExtraSection/CarouselFood/FoodGallery';
import { Link } from 'react-router-dom';
import SliderBanner from '../Banner/SliderBanner';
import { Title } from '../../../Components/Title/Title';
import { TimeLine } from '../TimeLine/TimeLine';

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
                <Title children={'Our popular Chef'} />
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:mx-5 gap-5 lg:gap-10 justify-items-center'>
                    {
                        chefDetails.map(chefDetail => <ChefDetails
                            key={chefDetail._id}
                            chefDetail={chefDetail}
                        ></ChefDetails>)
                    }
                </div>
            </div>
            <CarouselFood />
            <TimeLine />
        </div>
    )

};

export default Home;