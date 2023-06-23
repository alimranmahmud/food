import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodMenuItems from './FoodMenuItems';

const FoodMenu = () => {
    const allFoods = useLoaderData()
    // console.log(allFoods)
    return (
        <div className='mt-10 grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                allFoods.map(food => <FoodMenuItems key={food._id} food={food}></FoodMenuItems>)
            }
        </div>
    );
};

export default FoodMenu;