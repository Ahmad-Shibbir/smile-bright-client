import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [myReview, setmyReview] = useState([])

    console.log(myReview);

    useEffect(() => {
        fetch(`https://smile-bright-server.vercel.app/my-review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setmyReview(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure that you want to delete?');
        if (proceed) {
            fetch(`https://smile-bright-server.vercel.app/my-review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('successfully deleted!');
                        const remaining = myReview.filter(rm => rm._id !== id);
                        setmyReview(remaining);
                    }
                })
        }
    }
    let idd,service;
    const  handleComment =(id,service) =>{
          idd = id;
          service= service;
         return idd;
        // console.log(idd);
   }
    const handleUpdate = ( event)=> {
        event.preventDefault();
        const form = event.target;        
        const comment = form.comment.value;
        console.log(comment);

        const review = {            
            comment,   
            serrviceId: idd,
            customer: user.displyName,
            email: user.email,
            photoURL: user?.photoURL,            
            service       
        }
        
       
        console.log(idd);
        fetch(`https://smile-bright-server.vercel.app/my-review/${idd}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('successfully updated!');
                    // setmyReview([...review]);
                }
            })
    }

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
                                                    r?.imgUrl} alt="Avatar Tailwind CSS Component" />
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



                                {/* <button onClick={() => handleUpdate(r._id)} className="btn btn-ghost btn-xs">Update</button> */}
                                <th>
                                    {/* The button to open modal */}
                                    <label htmlFor="my-modal-6" className="btn">Update</label>

                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                    <div className="modal modal-bottom sm:modal-middle">
                                        <form onSubmit={ handleUpdate}>
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Please Add Your New Comment Here</h3>

                                                <input name='comment' type="text" placeholder="Add Comment" className="input input-bordered input-info w-full max-w-xs py-4" />

                                                <div className="modal-action">
                                                <label onClick={()=> handleComment(r._id)} htmlFor="my-modal-6" className="btn">X</label>
                                                
                                                    <button onClick={()=> handleComment(r._id)} type='submit' className="btn btn-primary btn-xs">Update</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    

                                    <button onClick={() => handleDelete(r._id, r.service)} className="mx-5 btn btn-primary btn-xs">X</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>)
            }
            
        </div>
    );
};

export default MyReview;