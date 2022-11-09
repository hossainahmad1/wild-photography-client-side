import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesLimitCart from '../ServicesLimitCart/ServicesLimitCart';

const ServicesLimit = () => {
    const [serviceLimitt, setServiceLimitt] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviewlimit')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServiceLimitt(data)
            })
    }, [])
    return (
        <div className='mt-20'>
            <h2 className='text-4xl font-bold text-center'>Service Blog</h2>
            <div className='grid gap-5 mt-10 mb-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceLimitt.map(service => <ServicesLimitCart
                        key={service._id}
                        service={service}
                    ></ServicesLimitCart>)
                }
            </div>
            <div className='mb-10 lg:ml-80'>
                <Link to='/service'>
                    <button className="btn btn-warning  lg:ml-72 text-2xl font-semibold">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesLimit;