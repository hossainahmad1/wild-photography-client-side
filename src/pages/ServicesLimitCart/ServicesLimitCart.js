import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';




const ServicesLimitCart = ({ service }) => {
    const { _id, title, img, Price, details } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">

            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider>


            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className='text-2xl font-semibold text-orange-500'>Price: ${Price}</p>
                <p className=''>
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

export default ServicesLimitCart;