import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>
             <div>
                <h2 className="footer-title border-b-4 border-indigo-500" ></h2>
                <h2 className='text-center text-2xl  text-bold '>MY SERVICES</h2>




                <div className='grid grid-cols-3 gap-3'>
                    {
                        Services.map(s =>
                            <div className="card w-96 glass">
                                <figure><img src={s.img} alt="car!" /></figure>
                                <div className="card-body">
                                    <h1 className='text-4xl text-sky-200'>${s.price}</h1>
                                    <h2 className="card-title">{s.Services}</h2>
                                    <h1>{s._id}</h1>
                                    <p>{s.description.slice(0, 200)}</p>
                                    <div className="card-actions justify-end">
                                    <Link to={`/service-details/${s._id}`}>
                                        <button className="btn btn-primary"> Know More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <button className=" btn btn-primary">SEE ALL</button>
                <h2 className="footer-title border-b-4 border-indigo-500" ></h2>
            </div>
        </div>
    );
};

export default Services;