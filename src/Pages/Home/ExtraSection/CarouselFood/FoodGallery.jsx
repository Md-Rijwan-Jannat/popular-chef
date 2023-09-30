import React from 'react';
import { Title } from '../../../../Components/Title/Title';
import './FoodGallery.css'

const CarouselFood = () => {
    const foodItems = [
        {
            id: '1',
            name: 'Miso soup',
            imageSrc: 'https://res.cloudinary.com/simplotel/image/upload/x_0,y_26,w_500,h_282,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/evoma---business-hotel-k-r-puram-bangalore/japanese-food_Evoma_Whitefield_Bangalore_rds4kt',
            description: 'A traditional Japanese soup made with fermented soybean paste.'
        },
        {
            id: '2',
            name: 'Unagi eel',
            imageSrc: 'https://media.istockphoto.com/id/917919440/photo/japanese-food.jpg?s=612x612&w=0&k=20&c=NIq7qXf7XAM62Po6F2KrHpJZBQiaUvX_DIZw9v-B__c=',
            description: 'Grilled eel served with a savory sauce served with a tasty glaze.'
        },
        {
            id: '3',
            name: 'Tempura',
            imageSrc: 'https://media.istockphoto.com/id/533713646/photo/close-up-of-sashimi-sushi-set-with-chopsticks-and-soy.jpg?s=612x612&w=0&k=20&c=29ESG2HI79aNASIHBJJR3EO_Xx2Z8YvNhTn17z3lqPk=',
            description: 'Deep-fried seafood and vegetables in a light, crispy batter.'
        },
        {
            id: '4',
            name: 'Yakitori',
            imageSrc: 'https://i.ndtvimg.com/i/2016-04/japanese-food-625_625x406_81461928658.jpg',
            description: 'Skewered and grilled chicken pieces, often served with a tasty glaze.'
        },
        {
            id: '5',
            name: 'Sashimi',
            imageSrc: 'https://cdn.tasteatlas.com/images/toplistarticles/8cc45833c34a4bc99d85375ecfde18f6.jpg?m=facebook',
            description: 'Thinly sliced, fresh raw fish or seafood, often served with soy sauce and wasabi.'
        },
        {
            id: '6',
            name: 'Ramen',
            imageSrc: 'https://www.wondriumdaily.com/wp-content/uploads/2017/07/thumbnail-6.jpg',
            description: 'A Japanese noodle soup dish with various toppings and flavors.'
        }
    ];
    console.log(foodItems)
    return (
        <div className='mb-16 recipe'>
            <Title children={'Our Recipes'} />
            <div className='w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 justify-items-center py-10'>
                {
                    foodItems.map(item =><article key={item.id} className="recipe-card" >
                            <img
                                className="recipe-card__background"
                                src={item.imageSrc}
                                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                width="1920"
                                height="2193"
                            />
                            <div className="recipe-card__content | flow">
                                <div className="recipe-card__content--container | flow">
                                    <h2 className="recipe-card__title name">{item.name}</h2>
                                    <p className="recipe-card__description para">{item.description}
                                    </p>
                                </div>
                                <button className="recipe-card__button">Read more</button>
                            </div>
                        </article>
                    )
                }
            </div>
            </div>
        </div>
    );
};

export default CarouselFood;