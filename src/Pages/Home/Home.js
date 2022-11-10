import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelopeOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaSlackHash } from 'react-icons/fa';

const Home = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>

            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-5xl font-bold">Dr Ratul Arman</h1>
                        <p className="py-6">Hi I am Dr Ratul Arman, I have a 13 Years of experience in the dentist field. I love to help people who are suffering for their weak tooth. you can visit me in every weekday.   </p>
                        <button className="btn btn-primary">Get Appointment</button>
                    </div>
                </div>
            </div>


            <div>
                <h2 className="footer-title border-b-4 border-indigo-500" ></h2>
                <h2 className='text-center text-2xl  text-bold '>MY SERVICES</h2>




                <div className='grid grid-cols-3'>
                    {
                        Services.map(s =>
                            <div className="card w-96 glass">
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
                <Link to='services'><button className=" btn btn-primary">SEE ALL</button></Link>
                <h2 className="footer-title border-b-4 border-indigo-500" ></h2>
            </div>


            <footer className="footer p-10 bg-neutral text-neutral-content text-2xl">
                <div>
                    <FaPhoneAlt></FaPhoneAlt>
                    <span className="footer-title">011-222</span>

                </div>
                <div>
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                    <span className="footer-title">2/3 mirpur,dhaka</span>
                </div>
                <div>
                    <FaEnvelopeOpen></FaEnvelopeOpen>
                    <span className="footer-title">dr.ratul@gmail.com</span>
                </div>
            </footer>


            <div className="hero min-h-screen 	neutral">
            
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h2 className="footer-title border-b-4 border-indigo-500" ></h2>
                        <h1 className="text-5xl font-bold">Visit ME!!</h1>
                        <ul className="steps steps-vertical mb-6">
                          
                          <li className=" m-8 text-2xl font-bold grid grid-cols-2"> <FaSlackHash></FaSlackHash>
                          Comfortable Office</li>
                          <li className=" m-8 text-2xl font-bold grid grid-cols-2"> <FaSlackHash></FaSlackHash>
                           Friendly & Advanced Treatment</li>
                           <li className=" m-8 text-2xl font-bold grid grid-cols-2"> <FaSlackHash></FaSlackHash>
                           High Quality Equipment</li>
                        </ul>
                        <h2 className="footer-title border-b-4 border-indigo-500" ></h2>
                    </div>
                </div>
                
            </div>


        </div>
    );
};

export default Home;