import React from 'react';
import Banner from './Banner/Banner';
import HomePageSer from '../HomePageService/HomePageSer';
import HomeAbout from '../HomeAbout/HomeAbout';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomePageSer></HomePageSer>
            <HomeAbout></HomeAbout>
        </div>
    );
};

export default Home;