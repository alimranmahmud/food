import React from 'react';
import { useLoaderData } from 'react-router-dom';

const HomeServiceDetails = () => {
    const foodDatas = useLoaderData()
    return (
        <div className='flex justify-center items-center'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={foodDatas.img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{foodDatas.title}</h2>
                    <p>{foodDatas.description}</p>

                </div>
            </div>
        </div>
    );
};

export default HomeServiceDetails;