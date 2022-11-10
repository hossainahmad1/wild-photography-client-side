import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';
import MyReviewCart from './MyReviewCart';

const MyReview = () => {
    const { user } = useContext(AuthContex);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/servicemail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user.email])


    const handleDelete = id => {
        const procced = window.confirm('Are you sure,you want to delete review')
        if (procced) {
            fetch(`http://localhost:5000/service/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = services.filter(srv => srv._id !== id)
                        setServices(remaining);
                    }
                })
        }
    }


    const handleUpdate = id => {
        fetch(`http://localhost:5000/service/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <div>
            <div className='mt-12 mb-12'>
                <h2 className='text-2xl '>review {services.length} </h2>
                {
                    services.map(service => <MyReviewCart
                        key={service._id}
                        service={service}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                    ></MyReviewCart>)
                }
            </div>
        </div>
    );
};

export default MyReview;