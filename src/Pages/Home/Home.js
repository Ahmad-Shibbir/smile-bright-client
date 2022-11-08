import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelopeOpen } from "react-icons/fa";

const Home = () => {
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
                <h2 className='text-center text-2xl  text-bold'>MY SERVICES</h2>
                <button className="btn btn-primary">SEE ALL</button>
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

    
        </div>
    );
};

export default Home;