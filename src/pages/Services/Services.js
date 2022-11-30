import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [services, setServices] = useState([]);
    const { loading } = useContext(AuthContex)
    useEffect(() => {
        fetch('https://assignment-review-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if (loading) {
        return <h2 className='text-6xl'>loading....</h2>
    }
    return (
        <div className='grid gap-5 mt-10 mb-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <ServicesCart
                    key={service._id}
                    service={service}
                ></ServicesCart>)
            }
        </div>
    );
};

export default Services;