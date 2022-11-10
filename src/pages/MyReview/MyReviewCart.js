import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const MyReviewCart = ({ service, handleDelete }) => {
    // const { user } = useContext(AuthContex)
    const navigate = useNavigate()
    const { _id, name, email, text, } = service;
    // const handleUpdate = (id) => {
    //     navigate(`/update/${id}`)
    // }


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
                                <Link to={`/update/${_id}`}>
                                    <button className='btn btn-ghost'>update</button>
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