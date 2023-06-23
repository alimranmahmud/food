import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const BannerItem = ({ banner }) => {
    const { image, prev, id, next } = banner;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='carousel-img'>
                <img alt='' src={image} className="img-banner " />

            </div>
            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2  left-24   top-1/4">
                <div>
                    <h1 className='text-6xl font-bold text-white'>Healthy Food</h1><br />
                    <h1 className='text-3xl font-bold text-white'>GRAND OPENING</h1><br />
                    <h1 className='text-3xl  text-white'>9 AM - 10 PM</h1><br />
                </div>
            </div>
            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-24 lg:w-1/2  left-15   top-3/4">


                <div className='text-white text-xl'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, provident rem. Libero deleniti
                        fugit perspiciatis dicta debitis iste? Quia placeat temporibus consequatur aperiam sed voluptate non vel aspernatur beatae officiis.</p>
                    <p>www.yoursiteweb.com</p>
                    <div className='flex gap-2 mt-4 text-white'>
                        <FaInstagram className='w-[50px]' ></FaInstagram>
                        <FaFacebook className='w-[50px]' ></FaFacebook>
                        <FaTwitter className='w-[50px]' ></FaTwitter>
                        <FaWhatsapp className='w-[50px]' ></FaWhatsapp>
                    </div>
                </div>

            </div>

            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2  right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;