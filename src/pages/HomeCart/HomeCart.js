import React from 'react';


const HomeCart = () => {
    return (
        <div className='mt-12 mb-12'>
            <div className="hero rounded  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-[50%] rounded' src="https://images.unsplash.com/photo-1551705459-5611b0d0b60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
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