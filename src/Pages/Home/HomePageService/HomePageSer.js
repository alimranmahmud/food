import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import { Link } from 'react-router-dom';

const HomePageSer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service/less')
            .then(res => res.json())
            .then(data => setProducts(data.result))
    }, [])
    console.log(products)
    return (
        <div className='mt-10'>
            <h1 className='text-center font-bold text-4xl mb-5'>FOOD</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 sm:grid-cols-1  '>
                {
                    products.map(product => <SingleService key={product._id} product={product}></SingleService>)
                }
            </div>
            <div className='flex justify-center mt-8 mb-8'>
                <button className='btn btn-outline '><Link to='/menu'>Show All</Link></button>
            </div>
        </div>
    );
};

export default HomePageSer;