import React from 'react';
import HomeBannar from '../HomeBannar/HomeBannar';
import HomeCart from '../HomeCart/HomeCart';
import HomeSection from '../HomeSection/HomeSection';
import ServicesLimit from '../ServicesLimit/ServicesLimit';

const Home = () => (
    <div>
        <HomeSection></HomeSection>
        <ServicesLimit></ServicesLimit>
        <HomeCart></HomeCart>
        <HomeBannar></HomeBannar>
    </div>
);

export default Home;