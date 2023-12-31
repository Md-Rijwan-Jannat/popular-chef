import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaCheckCircle, FaHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';

const Recipe = ({ rec }) => {
    const { id, cooking_method, ingredients, recipe_name, likes, rating } = rec;
    const [disabledB, setDisabledB] = useState(false)

    const toastHandler = () => {
        toast.success('Add to favorite')
        setDisabledB(true)
    }
    return (
        <div className=" bg-base-100 shadow-xl m-5">
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <p>{cooking_method}</p>
                <div>
                    <h3 className='text-xl'>Ingredients</h3>
                    <div className='pl-3'>
                        {
                            ingredients.map((list) => <ol>
                                <li className='flex items-center text-sm my-1'><FaCheckCircle className='text-blue-500 mr-2' /> {list}</li>
                            </ol>)
                        }
                    </div>
                </div>
                <div style={{ fontFamily: 'cursive' }} className='text-xl flex justify-between p-2 gap-2 items-center rounded-lg shadow-lg text-red-600 '>
                    <p className='font-bold'>Likes</p>
                    <div className='flex items-center gap-1'>
                        <FaHeart />
                        <span className='font-semibold text-orange-500 pb-1'><small>{likes}</small></span>
                    </div>
                </div>
                <div className='flex items-center'>
                    <Rating className='pt-1 flex items-center'
                        placeholderRating={rating}
                        emptySymbol={<FaStarHalfAlt className="icon text-yellow-500" />}
                        placeholderSymbol={<FaStar className="icon text-yellow-500" />}
                        fullSymbol={<FaStar className="icon text-yellow-500" />}
                    ></Rating>
                    <p className='ml-4'>{rating}</p>
                </div>
                <div className="card-actions mt-3">
                    <button onClick={toastHandler} disabled={disabledB} className="btn btn-primary w-full bg-orange-500 hover:bg-red-600 border-none">Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;