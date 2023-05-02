import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='w-full relative my-1'>
                <img style={{ height: '600px' }} className='w-full blur-sm brightness-75' src="https://media.istockphoto.com/id/917919440/photo/japanese-food.jpg?s=612x612&w=0&k=20&c=NIq7qXf7XAM62Po6F2KrHpJZBQiaUvX_DIZw9v-B__c=" alt="" />
            </div>
            <div className="carousel w-full absolute lg:bottom-5 bottom top text-white">
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero min-h-min lg:my-16 ">
                        <div className="hero-content flex-col md:flex-row-reverse mx-2 lg:mx-24">
                            <img src="https://media.istockphoto.com/id/1182416349/vector/pizza-chef.jpg?s=612x612&w=0&k=20&c=Ml9gunrNOKt_d2vXjF37UJiGeW7qEWD4UC-D7PnSF8E=" className="max-w-sm rounded-lg shadow-2xl sliderImage2" />
                            <div className='small'>
                                <h1 style={{fontFamily:'cursive'}} className="text-6xl font-bold textH3">Welcome to Japanese cuisine food!</h1>
                                <p  style={{fontFamily:"system-ui"}} className="py-6 text-gray-300">The traditional cuisine of Japan (Japanese: washoku) is based on rice with miso soup and other dishes; there is an emphasis on seasonal ingredients. Side dishes often consist of fish, pickled vegetables, and vegetables cooked in broth. Seafood is common, often grilled, but also served raw as sashimi or in sushi.</p>
                                <button className="btn bg-red-700 border-none">Get Started</button>
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
                                <h1 style={{fontFamily:'cursive'}} className="text-6xl font-bold textH3">Box Office food News!</h1>
                                <p style={{fontFamily:"system-ui"}} className="py-6  text-gray-300">PepsiCo and Reliance Industries are among those said to have been sounded out by Goldman Sachs, the investment bank mandated to run the auction process. However, according to executives close to the developments, Reliance is not keen on pursuing the potential offer, given the steep valuations.</p>
                                <button className="btn bg-red-700 border-none">Get Started</button>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle bg-opacity-10">❮</a>
                                    <a href="#slide2" className="btn btn-circle bg-opacity-10">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Home;