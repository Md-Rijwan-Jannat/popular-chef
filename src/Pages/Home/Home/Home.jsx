import React, { useEffect, useState } from 'react';
import './Home.css'
import ChefDetails from '../../../Components/ChefDetails/ChefDetails';
import CarouselFood from '../ExtraSection/CarouselFood/CarouselFood';
import Vigitor from '../ExtraSection/CarouselFood/Vigitor';
import { Link } from 'react-router-dom';

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
            <div className='w-full relative my-1'>
                <img style={{ height: '100vh' }} className='w-full' src="https://byfood.b-cdn.net/api/public/assets/9595/content" alt="" />
            </div>
            <div className="carousel w-full absolute lg:bottom-5 bottom top text-white">
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero min-h-min lg:my-16 ">
                        <div className="hero-content flex-col md:items-center md:justify-center lg:flex-row-reverse mx-2 lg:mx-24">
                            <img src="https://media.istockphoto.com/id/1182416349/vector/pizza-chef.jpg?s=612x612&w=0&k=20&c=Ml9gunrNOKt_d2vXjF37UJiGeW7qEWD4UC-D7PnSF8E=" className="max-w-sm rounded-lg shadow-2xl sliderImage2" />
                            <div className='small'>
                                <h1 style={{ fontFamily: 'cursive' }} className="text-8xl font-bold text-orange-500 textH3 ">Welcome to Japanese <span className='text-red-700'>cuisine food!</span></h1>
                                
                                <Link to={'/register'} className="btn bg-red-700 border-none my-5 md:my-10">Get Started</Link >
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle bg-opacity-10">❮</a>
                                    <a href="#slide2" className="btn btn-circle bg-opacity-10">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero min-h-min lg:my-16 ">
                        <div className="hero-content flex-col md:flex-row-reverse mx-2 lg:mx-24">
                            <img src="https://media.istockphoto.com/id/472324159/vector/excellento.jpg?s=612x612&w=0&k=20&c=5v5j-o4SK6VP0qiuj7mec3nsiFZ1AKpigDgEUmJPe6A=" className="max-w-sm rounded-lg shadow-2xl sliderImage" />
                            <div className='small'>
                                <h1 style={{ fontFamily: 'cursive' }} className="text-8xl font-bold text-orange-500 textH3">Box Office food <span className='text-red-700'> News!</span></h1>
                               
                                <button className="btn bg-red-700 border-none my-5 md:my-10 hover:bg-orange-500">Get Started</button>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle bg-opacity-10">❮</a>
                                    <a href="#slide2" className="btn btn-circle bg-opacity-10">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-col items-center justify-center'>
                    <h2 className='text-center text-3xl md:text-4xl lg:text-5xl flex-wrap justify-center  text-red-600 font-bold my-24'>Chef <span className='text-orange-500 font-normal'>information</span> </h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:mx-5 mx-2 '>
                    {
                        chefDetails.map(chefDetail => <ChefDetails
                            key={chefDetail._id}
                            chefDetail={chefDetail}
                        ></ChefDetails>)
                    }
                </div>
            </div>

            <CarouselFood/>
            <Vigitor/>
        </div>
    )

};

export default Home;