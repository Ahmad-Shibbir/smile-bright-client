import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';


const Register = () => {
    const [error, setError] = useState();
    const { createUser } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,  email, password);

        createUser(email, password,name,photoURL)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error.message);

            })
    }


    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <div className="hero min-h-screen bg-base-200">                
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://acad.xlri.ac.in/evening/images/login.svg" alt="" />
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text" >Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text" >Name</span>
                                    </label>
                                    <input type="url" name='photoURL' placeholder="photoURL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text" >Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link className="label-text-alt link link-hover" to='/login'>already have an account?</Link>
                                       
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <div className="form-control mt-6">

                                </div>

                            </div>
                        </div>
                    </div>
                    </div>
            </form>
        </div>
       
    );
};

export default Register;