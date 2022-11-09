import React, { useContext } from 'react';
import { FaTooth } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';


const Header = () => {
    const { providerLogin } = useContext(AuthContext);
    const { user, logOut } = useContext(AuthContext);
    const url = user?.photoURL;


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }

    const displayUserName = () => {
        console.log("hellow");
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <FaTooth className=' text-4xl'></FaTooth>
                    <a className="btn btn-ghost normal-case text-2xl">Smile Bright</a>


                </div>


                <div>
                    <Link to='/'><button className="btn btn-ghost">Home</button></Link>
                    <Link to='services'><button className="btn btn-ghost">Service</button></Link>
                    <Link to='/add-service'><button className="btn btn-ghost">Add Service</button></Link>
                    <Link to='blog'><button className="btn btn-ghost">Blog</button></Link>
         
                </div>




                {
                    user?.uid ?
                        <div className="flex-none gap-2">

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={url} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user?.displayName}
                                            
                                        </a>
                                    </li>

                                    <Link onClick={handleLogOut} to='/login'><button className="btn btn-ghost text-xl">LogOut</button></Link>
                                </ul>

                            </div>
                        </div>

                        : <div>
                            <Link to='/login'>Login</Link>

                        </div>
                }
            </div>
        </div>
    );
};

export default Header;