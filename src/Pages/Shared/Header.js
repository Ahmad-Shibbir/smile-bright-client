import React from 'react';
import { FaTooth } from 'react-icons/fa';


const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <FaTooth className=' text-4xl'></FaTooth>
                    <a className="btn btn-ghost normal-case text-2xl">Smile Bright</a>


                </div>


                <div>
                    <button className="btn btn-ghost">Home</button>
                    <button className="btn btn-ghost">Service</button>
                    <button className="btn btn-ghost">Blog</button>
                </div>


                <div className="flex-none gap-2">

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;