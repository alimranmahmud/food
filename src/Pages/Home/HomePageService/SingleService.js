import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ product }) => {

    return (

        <div className="card w-96 bg-base-100 shadow-xl mt-9 flex justify-center ">
            <figure><img className='w-[150px] ' src={product.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                {
                    product.description.length > 100 ?
                        <p>{product.description.slice(0, 70) + '...'}<Link to=''>read more</Link></p> : <p>....</p>
                }
                <div className="card-actions justify-center">

                    <Link to={`/service/details/${product._id}`} className="badge badge-outline" >Details</Link>
                </div>
            </div>

        </div>


    );
};

export default SingleService;