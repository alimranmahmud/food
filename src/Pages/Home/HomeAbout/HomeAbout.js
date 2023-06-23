import React from 'react';
import homeAbout from '../../../assets/HomeaboutIMG/aboutService.png'
import online from '../../../assets/HomeAboutUs/onlineOrder.jpeg'
import service from '../../../assets/HomeAboutUs/service.jpeg'
import clean from '../../../assets/HomeAboutUs/clean.png'
import preorder from '../../../assets/HomeAboutUs/preorder.png'
import organized from '../../../assets/HomeAboutUs/organized.png'
import superChefs from '../../../assets/HomeAboutUs/superChefs.jpeg'
const HomeAbout = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img className='w-[400px]' src={homeAbout} />

                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">We Are More Than Multiple Service</h1>
                        <p className="py-6">This is type of restaurant which typically serves food and drinks in addition to light refreshments such as backed goods or snacks. The term comes from the rench word meaning food.</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex m-[15px] justify-center items-center'>
                            <img className='w-[50px] rounded-full' src={online} alt="" />
                            <p>Online Order</p>
                        </div>
                        <div className='flex  m-[15px] justify-center items-center'>
                            <img className='w-[50px] rounded-full' src={service} alt="" />
                            <p>24/7 Service</p>
                        </div>
                        <div className='flex  m-[15px]  justify-center items-center'>
                            <img className='w-[50px] rounded-full' src={clean} alt="" />
                            <p>Clean Kitchen</p>
                        </div>
                        <div className='flex m-[15px]  justify-center items-center'>
                            <img className='w-[50px] rounded-full' src={preorder} alt="" />
                            <p>Pre-Reservation</p>
                        </div>
                        <div className='flex  m-[15px]  justify-center items-center'>
                            <img className='w-[50px] rounded-full' src={organized} alt="" />
                            <p>Oraganized <br /> Foodle Place</p>
                        </div>
                        <div className='flex  m-[15px] justify-center items-center'>
                            <img className='w-[50px] rounded-full' src={superChefs} alt="" />
                            <p>Super Chefs</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-center mt-2'>
                <button className='btn btn-outline '>About Us</button>

            </div>
        </div>
    );
};
export default HomeAbout;
