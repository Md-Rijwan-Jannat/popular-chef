import React from 'react';

const CarouselFood = () => {
    return (
        <div className='mb-16'>
            <h2 className='text-center text-3xl md:text-4xl lg:text-5xl flex-wrap justify-center  text-red-600 font-bold my-2 mt-16'>Chef <span className='text-orange-500 font-normal'>Food Gallery</span> </h2>
            <div className='divider border-2 border-red-400 mb-10'></div>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>

                <div className="w-full relative text-opacity-0 hover:text-white hover:shadow-orange-400 hover:shadow-xl rounded-3xl">
                    <img src="https://res.cloudinary.com/simplotel/image/upload/x_0,y_26,w_500,h_282,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/evoma---business-hotel-k-r-puram-bangalore/japanese-food_Evoma_Whitefield_Bangalore_rds4kt" className="w-[300px] h-[150px] md:h-[200px] rounded-3xl relative brightness-50" />
                    <p className='text-lg absolute top-1/2 uppercase font-bold text-center px-10'> Miso soup</p>
                </div>
                <div className="w-full relative text-opacity-0 hover:text-white hover:shadow-orange-400 hover:shadow-xl rounded-3xl">
                    <img src="https://media.istockphoto.com/id/917919440/photo/japanese-food.jpg?s=612x612&w=0&k=20&c=NIq7qXf7XAM62Po6F2KrHpJZBQiaUvX_DIZw9v-B__c=" className="w-[300px] h-[150px] md:h-[200px] rounded-3xl relative brightness-50" />
                    <p className='text-lg absolute top-1/2 uppercase font-bold text-center px-10'> Unagi eel</p>
                </div>
                <div className="w-full relative text-opacity-0 hover:text-white hover:shadow-orange-400 hover:shadow-xl rounded-3xl">
                    <img src="https://media.istockphoto.com/id/533713646/photo/close-up-of-sashimi-sushi-set-with-chopsticks-and-soy.jpg?s=612x612&w=0&k=20&c=29ESG2HI79aNASIHBJJR3EO_Xx2Z8YvNhTn17z3lqPk=" className="w-[300px] h-[150px] md:h-[200px] rounded-3xl relative brightness-50" />
                    <p className='text-lg absolute top-1/2 uppercase font-bold text-center px-10'> Tempura</p>
                </div>
                <div className="w-full relative text-opacity-0 hover:text-white hover:shadow-orange-400 hover:shadow-xl rounded-3xl">
                    <img src="https://i.ndtvimg.com/i/2016-04/japanese-food-625_625x406_81461928658.jpg" className="w-[300px] h-[150px] md:h-[200px] rounded-3xl relative brightness-50" />
                    <p className='text-lg absolute top-1/2 uppercase font-bold text-center px-10'> Yakitori</p>
                </div>
                <div className="w-full relative text-opacity-0 hover:text-white hover:shadow-orange-400 hover:shadow-xl rounded-3xl">
                    <img src="https://cdn.tasteatlas.com/images/toplistarticles/8cc45833c34a4bc99d85375ecfde18f6.jpg?m=facebook" className="w-[300px] h-[150px] md:h-[200px] rounded-3xl relative brightness-50" />
                    <p className='text-lg absolute top-1/2 uppercase font-bold  text-center px-10'> Sashimi</p>
                </div>
                <div className="w-full relative text-opacity-0 hover:text-white hover:shadow-orange-400 hover:shadow-xl rounded-3xl">
                    <img src="https://www.wondriumdaily.com/wp-content/uploads/2017/07/thumbnail-6.jpg" className="w-[300px] h-[150px] md:h-[200px] rounded-3xl relative brightness-50" />
                    <p className='text-lg absolute top-1/2 uppercase font-bold  text-center px-10'> Ramen</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselFood;