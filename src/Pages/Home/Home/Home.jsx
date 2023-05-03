import React, { useEffect, useState } from 'react';
import './Home.css'
import ChefDetails from '../../../Components/ChefDetails/ChefDetails';

const Home = () => {
    const [chefDetails, setChefDetails] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/chef')
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
                                <h1 style={{ fontFamily: 'cursive' }} className="text-6xl font-bold text-orange-500 textH3 ">Welcome to Japanese <span className='text-red-700'>cuisine food!</span></h1>
                                <p style={{ fontFamily: "system-ui" }} className="py-6 text-orange-500 bg-gray-200 bg-opacity-50 p-5 rounded-lg my-4 textP">The traditional cuisine of Japan Japanese: washoku is based on rice with miso soup and other dishes; there is an emphasis on seasonal ingredients. Side dishes often consist of fish, pickled vegetables, and vegetables cooked in broth. Seafood is common, often grilled, but also served raw as sashimi or in sushi.</p>
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
                                <h1 style={{ fontFamily: 'cursive' }} className="text-6xl font-bold text-orange-500 textH3">Box Office food <span className='text-red-700'> News!</span></h1>
                                <p style={{ fontFamily: "system-ui" }} className="py-6 text-orange-500 bg-gray-200 bg-opacity-50 p-5 rounded-lg my-4 textP">PepsiCo and Reliance Industries are among those said to have been sounded out by Goldman Sachs, the investment bank mandated to run the auction process. However, according to executives close to the developments, Reliance is not keen on pursuing the potential offer, given the steep valuations.</p>
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

            <div className='flex-col items-center justify-center'>
                    <h2 className='text-center text-4xl md:text-6xl lg:text-8xl flex-wrap justify-center  text-red-600 font-bold my-24'>Chef <span className='text-orange-500 font-normal'>information</span> <img className='w-48 md:ml-48 ml-28 lg:ml-64 xl:ml-96 md:w-72 lg:w-96' src="https://img.freepik.com/premium-vector/chinese-restaurant-logo-design-template-inspiration-vector-illustration_556641-201.jpg" alt="" /></h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:mx-5 mx-2 '>
                    {
                        chefDetails.map(chefDetail => <ChefDetails
                            key={chefDetail._id}
                            chefDetail={chefDetail}
                        ></ChefDetails>)
                    }
                </div>
            </div>
        </div>
    )

};

export default Home;