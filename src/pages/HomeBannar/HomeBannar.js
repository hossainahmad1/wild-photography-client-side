import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../asset/img/photro.jpg'

const HomeBannar = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-12">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body mt-12 ml-12">
                <h2 className='card-title text-4xl font-bold'> Wild Photography</h2>
                <p>Animals are multicellular, eukaryotic organisms in  the biological kingdom <br />Animalia. With few exceptions, animals consume organic material, <br />breathe oxygen, are able to move</p>
                <div className="card-actions justify-start">
                    <Link to='/service'>
                        <button className="btn btn-primary">service</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeBannar;