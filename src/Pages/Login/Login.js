import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';
// import './Login.css'

const Login = () => {
    const [error, setError] = useState();

    const { signIn, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError("");
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);

            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(e => console.log(e))
    }
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            })
    }

    return (
        <div>
            <form onSubmit={handleSignin}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://acad.xlri.ac.in/evening/images/login.svg" alt="" />
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
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
                                        <Link className="label-text-alt link link-hover" to='/register'>don't have account?</Link>

                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="form-control mt-6">
                                    <button onClick={handleGoogleSignIn} className="btn btn-primary">Google Login</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
        // <div className=' w-50 mx-lg-auto'>
        //     <Form onSubmit={handleSignin}>

        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label>Email address</Form.Label>
        //             <Form.Control  name='email' type="email" placeholder="Enter email" required />
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control name='password' type="password" placeholder="Password" required/>
        //         </Form.Group>

        //         <Button variant="primary" type="submit">
        //             Submit
        //         </Button>

        //                 <br />
        //         <Form.Text className="text-danger">
        //             {error}
        //         </Form.Text>
        //     </Form>

        //     <button style={{margin: '15px 15px 8px 0'}} onClick={handleGoogleSignIn}>Google</button>
        //     <button onClick={handleGithubSignIn}>Github</button>
        //     <br />
        //     <p><Link to='/register'>don't have any account?</Link></p>
        // </div>
    );
};

export default Login;