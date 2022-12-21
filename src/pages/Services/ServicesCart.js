import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const ServicesCart = ({ service }) => {
    const { _id, img, title, details, Price } = service;

    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">

            <PhotoProvider>
                <PhotoView src={img}>
                    <img className='h-[220px] rounded' src={img} alt="" />
                </PhotoView>
            </PhotoProvider>

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