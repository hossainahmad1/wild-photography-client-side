import React from 'react';
import Bannar from '../Bannar/Bannar';
import ServicesLimit from '../ServicesLimit/ServicesLimit';

const Home = () => {
    return (
        <div>
            <h3>this is a home page</h3>
            <div>
                <Bannar></Bannar>
            </div>
            <div>
                <ServicesLimit></ServicesLimit>
            </div>
        </div>
    );
};

export default Home;