import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCart = ({ service, handleDelete, handleUpdate }) => {
    const { _id, name, email, text, } = service;


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                                <Link to={`/`}>
                                    <button onClick={() => handleUpdate(_id)} className='btn btn-ghost'>update</button>
                                </Link>
                            </th>


                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{text}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviewCart;