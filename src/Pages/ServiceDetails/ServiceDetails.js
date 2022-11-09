import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { img, service, price, description, _id } = useLoaderData();
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service}</h2>
                    <h2 className="card-title">${price}</h2>
                    <p>{description}</p>
                </div>
            </div>

           <Link to={`/add-review/${_id}`}> <button className="btn btn-secondary">Add Review</button></Link>
        </div>
    );
};

export default ServiceDetails;