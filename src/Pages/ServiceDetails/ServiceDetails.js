import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { img, service, price, description, _id } = useLoaderData();
    const [review, setReview] = useState({})

    console.log(review);

    useEffect(() => {
        fetch(`http://localhost:5000/all-review?serrviceId=${_id}`)
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

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">                      
                      
                        <tbody>                           
                            <tr>
                                
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>                                           
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>           
                        </tbody>            
                    </table>
                </div>
                {/* {
                    review?.map(r => <div>
                        
                    </div>)
                } */}
            </div>


            <Link to={`/add-review/${_id}`}> <button className="btn btn-secondary">Add Review</button></Link>
        </div>
    );
};

export default ServiceDetails;