import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';
import DetailsCartReview from './DetailsCartReview';

const DetailsCart = () => {
    const { user } = useContext(AuthContex);
    const [services, setServices] = useState([])
    const service = useLoaderData();
    const { _id, title, img, details } = service;


    useEffect(() => {
        fetch(`https://assignment-review-server.vercel.app/service?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user?.email])



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'Not Register';
        const text = form.text.value;
        // console.log(name, email, text)
        const service = {
            seviceid: _id,
            name,
            email,
            text
        }

        fetch('https://assignment-review-server.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('service added successfully');
                    const remaining = services.filter(srv => srv._id !== user._id)
                    setServices(remaining)
                    form.reset()
                }
            })
            .catch(err => console.log(err))



    }


    return (
        <div>
            <div className="card card-side lg:w-3/5 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-start">
                        <Link to='/service'>
                            <button className="btn btn-primary">Back</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='mt-12'>
                <div className="text-3xl text-center font-bold"> Review blog</div>
                <h3>service {services.length}</h3>
                {
                    services.map(service => <DetailsCartReview
                        key={service._id}
                        service={service}
                    ></DetailsCartReview>)
                }
            </div>

            <div>
                <div className='mt-28'>

                    {
                        user?.email ?
                            <>
                                <h2 className='text-center text-5xl font-bold '>Review Section</h2>
                                <div>
                                    <p>Title:{title}</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4'>
                                        <input type="text" name='name' placeholder="Name" defaultValue={user?.displayName} readOnly className="input input-bordered input-secondary w-full" required />
                                        <input type="email" name='email' placeholder="your email" defaultValue={user?.email} readOnly className="input input-bordered input-secondary w-full" />
                                    </div>
                                    <textarea name='text' className="textarea textarea-bordered h-24 w-full" placeholder="Your message" required></textarea>
                                    <input className='btn mb-4' type="submit" value="Review Submit" />
                                </form>
                            </>
                            :
                            <>
                                <p className='text-2xl font-semibold text-center mb-10 '>Please Login to add review
                                    <Link to='/login'><button className='text-rose-500 ml-3'>Login</button></Link></p>

                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailsCart;