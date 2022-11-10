import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Page not found!</h1>
                       
                        <Link to='/'><button className="m-4 btn btn-primary">Back to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;