import React from 'react';
import Bannar from '../Bannar/Bannar';
import HomeCart from '../HomeCart/HomeCart';
import ServicesLimit from '../ServicesLimit/ServicesLimit';

const Home = () => {
    return (
        <div>
            <h3>this is a home page</h3>
            <Bannar></Bannar>
            <ServicesLimit></ServicesLimit>
            <HomeCart></HomeCart>
        </div>
    );
};

export default Home;