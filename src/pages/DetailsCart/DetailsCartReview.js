import React from 'react';

const DetailsCartReview = ({ service }) => {
    const { name, email, text } = service;
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
                            <th></th>
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

export default DetailsCartReview;