import React from 'react';
import img1 from '../../../../assets/Banner/img1.avif'
import img2 from '../../../../assets/Banner/img2.avif'
import img3 from '../../../../assets/Banner/img3.avif'
import img4 from '../../../../assets/Banner/img4.avif'
import img5 from '../../../../assets/Banner/img5.jpeg'
import img6 from '../../../../assets/Banner/img6.jpeg'

import './Banner.css'
import BannerItem from './BannerItem';
const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2

    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3

    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4

    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5

    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 6

    },
    {
        image: img6,
        prev: 5,
        id: 6,
        next: 1

    },
]
const Banner = () => {
    return (
        <div className="carousel lg:h-[550px] md:h-[500px]">
            {
                bannerData.map(bannerSingleData => <BannerItem key={bannerSingleData.id} banner={bannerSingleData}></BannerItem>)
            }

        </div>
    );
};

export default Banner;