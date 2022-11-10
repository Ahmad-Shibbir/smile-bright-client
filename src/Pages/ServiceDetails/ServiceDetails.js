import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { img, service, price, description, _id } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([])

    console.log(review,_id);

    useEffect(() => {
        fetch(`http://localhost:5000/review-add?serrviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [_id])

    return (
        <div>
            <div className="m-6 card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service}</h2>
                    <h2 className="card-title">${price}</h2>
                    <p>{description}</p>
                </div>
            </div>


            <div>

            {
                review.map(r => <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <tbody>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={
                                                    r?.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{r.customer}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {r.comment}
                                    <br />
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>)
            }
            </div>


            <Link to={`/review-add/${_id}`}> <button className="btn btn-secondary">Add Review</button></Link>
            <h2>{review.length}</h2>
        </div>
    );
};

export default ServiceDetails;