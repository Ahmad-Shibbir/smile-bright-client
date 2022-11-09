import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [myReview, setmyReview] = useState({})

    console.log(myReview);

    useEffect(() => {
        fetch(`http://localhost:5000/my-review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setmyReview(data))
    }, [user.email])
    return (
        <div>
            {
                myReview.map(r => <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <tbody>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={
                                                    r?.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{r.service}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {r.comment}
                                    <br />
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>)
            }
            <h2>my review {myReview.length}</h2>
        </div>
    );
};

export default MyReview;