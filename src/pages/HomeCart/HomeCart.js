import React from 'react';
import img from '../../asset/img/deer.webp';

const HomeCart = () => {
    return (
        <div className='mt-12 mb-12'>
            <div className="hero rounded  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Deer is a beautiful <br /> animal</h1>
                        <p className="py-6 font-medium">The two main groups of deer are the Cervinae, including the muntjac, the elk, the red deer, and the fallow deer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCart;