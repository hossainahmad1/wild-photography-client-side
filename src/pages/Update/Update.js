import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const Update = () => {

    const { user } = useContext(AuthContex)
    const route = useParams()
    console.log(route)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const text = form.text.value;
        const updateReview = {
            text,
        }
        fetch(`https://assignment-review-server.vercel.app/update/${user._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
            .tnen(res => res.json())
            .then(data => console.log(data))


    }


    return (
        <div>
            <div className='mt-28'> <h2 className='text-center text-5xl font-bold '>Review Section</h2>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4'>
                        <input type="text" name='name' placeholder="Name" defaultValue={user?.displayName} readOnly className="input input-bordered input-secondary w-full" required />
                        <input type="email" name='email' placeholder="your email" defaultValue={user?.email} readOnly className="input input-bordered input-secondary w-full" />
                    </div>
                    <textarea name='text' className="textarea textarea-bordered h-24 w-full" placeholder="Your message" required></textarea>
                    <input className='btn mb-4' type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default Update;