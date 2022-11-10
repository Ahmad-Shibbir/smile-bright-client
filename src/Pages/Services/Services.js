import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://smile-bright-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>
             <div>
                <h2 className="footer-title border-b-4 border-indigo-500" ></h2>
                <h2 className='text-center text-2xl  text-bold '>MY SERVICES</h2>




                <div className='grid grid-cols-3 gap-8'>
                    {
                        Services.map(s =>
                            <div className="card w-80 glass">
                                <figure><img src={s.img} alt="car!" /></figure>
                                <div className="card-body">
                                    
                                    <h2 className="card-title text-2xl">{s.service}</h2>
                                    <h1 className='text-4xl '>${s.price}</h1>
                                    
                                    <p>{s.description.slice(0, 100)}</p>
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
                
                <h2 className="footer-title border-b-4 border-indigo-500" ></h2>
            </div>
        </div>
    );
};

export default Services;