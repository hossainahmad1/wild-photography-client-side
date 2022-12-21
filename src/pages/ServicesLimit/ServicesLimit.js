import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesLimitCart from '../ServicesLimitCart/ServicesLimitCart';

const ServicesLimit = () => {
    const [serviceLimitt, setServiceLimitt] = useState([]);

    useEffect(() => {
        fetch('https://assignment-review-server.vercel.app/reviewlimit')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServiceLimitt(data)
            })
    }, [])
    return (
        <div className='mt-16'>
            <h2 className='text-4xl font-bold text-center'>Service Blog</h2>
            <div className='grid gap-5 mt-10 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceLimitt.map(service => <ServicesLimitCart
                        key={service._id}
                        service={service}
                    ></ServicesLimitCart>)
                }
            </div>
            <div className='mb-10 lg:ml-80'>
                <Link to='/service'>
                    <button className="btn btn-primary lg:ml-52 text-xl font-semibold">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesLimit;