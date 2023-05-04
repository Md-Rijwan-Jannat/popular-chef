import React from 'react';

const CarouselFood = () => {
    return (
        <div className='mb-16 grid justify-center'>
            <h1 className='text-3xl text-red-600 text-center mb-12 font-semibold'>Food Items</h1>
            <div>
            <button className="btn btn-outline border-none bg-opacity-0 hover:bg-white"> <div className="carousel-item w-1/2">
                <img src="https://res.cloudinary.com/simplotel/image/upload/x_0,y_26,w_500,h_282,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/evoma---business-hotel-k-r-puram-bangalore/japanese-food_Evoma_Whitefield_Bangalore_rds4kt" className="w-96 h-36 rounded-3xl relative" />
                <p className='text-lg font-bold absolute text-center px-10'> Miso soup</p>
            </div></button>
            <button className="btn btn-outline border-none bg-opacity-0 hover:bg-white"> <div className="carousel-item w-1/2">
                <img src="https://media.istockphoto.com/id/917919440/photo/japanese-food.jpg?s=612x612&w=0&k=20&c=NIq7qXf7XAM62Po6F2KrHpJZBQiaUvX_DIZw9v-B__c=" className="w-96 h-36 rounded-3xl relative" />
                <p className='text-lg font-bold absolute text-center px-10'> Unagi eel</p>
            </div></button>
            <button className="btn btn-outline border-none bg-opacity-0 hover:bg-white"> <div className="carousel-item w-1/2">
                <img src="https://thumbs.dreamstime.com/b/traditional-japanese-food-6723440.jpg" className="w-96 h-36 rounded-3xl relative" />
                <p className='text-lg font-bold absolute text-center px-10'> Tempura</p>
            </div></button>
            <button className="btn btn-outline border-none bg-opacity-0 hover:bg-white"> <div className="carousel-item w-1/2">
                <img src="https://i.ndtvimg.com/i/2016-04/japanese-food-625_625x406_81461928658.jpg" className="w-96 h-36 rounded-3xl relative" />
                <p className='text-lg font-bold absolute text-center px-10'> Yakitori</p>
            </div></button>
            <button className="btn btn-outline border-none bg-opacity-0 hover:bg-white"> <div className="carousel-item w-1/2">
                <img src="https://cdn.tasteatlas.com/images/toplistarticles/8cc45833c34a4bc99d85375ecfde18f6.jpg?m=facebook" className="w-96 h-36 rounded-3xl relative" />
                <p className='text-lg font-bold absolute text-center px-10'> Sashimi</p>
            </div></button>
            <button className="btn btn-outline border-none bg-opacity-0 hover:bg-white"> <div className="carousel-item w-1/2">
                <img src="https://www.wondriumdaily.com/wp-content/uploads/2017/07/thumbnail-6.jpg" className="w-96 h-36 rounded-3xl relative" />
                <p className='text-lg font-bold absolute text-center px-10'> Ramen</p>
            </div></button>
            </div>
        </div>
    );
};

export default CarouselFood;