import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const ServicesCart = ({ service }) => {
    const { _id, img, title, details, Price } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className='text-2xl font-semibold text-orange-500'>Price: ${Price}</p>
                <p>
                    {
                        details.length > 100 ?
                            <p>{details.slice(0, 100) + '...'}</p>
                            : <p>{details}</p>
                    }
                </p>
                <div className="card-actions justify-start">
                    <Link to={`/reviewlimit/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;