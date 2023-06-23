import React from 'react';
import { Link } from 'react-router-dom';

const FoodMenuItems = ({ food }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className='flex justify-center '>
                <img className='w-[200px]  rounded-full' src={food.img} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{food.title}</h2>

                {
                    food.description.length > 100 ? <p>{food.description.slice(0, 70)}</p> : <p></p>
                }

                <div className="card-actions justify-end">
                    <Link to={`/order/${food._id}`}><button className="btn btn-primary">Add To Cart</button></Link>

                </div>
            </div>
        </div>
    );
};

export default FoodMenuItems;