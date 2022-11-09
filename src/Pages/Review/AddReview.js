import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const {_id, service} = useLoaderData();
    const handleReview =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const comment = form.comment.value;

        console.log(name);

        const review = {
            serrviceId : _id,
            customer: name
            
        }

        fetch('http://localhost:5000/add-review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(er => console.log(er))

    }
    return (
       
        <div>
            <div className="card  bg-primary text-primary-content">
                <div className="card-body">
                   <h2 className='card-title'>You are giving review for {service}</h2>
                    <form onSubmit={handleReview}>
                        <input name='name' type="text" placeholder="Please Enter Your Name" className="input input-bordered input-warning w-full max-w-xs" />
                        <br />
                        <input name='url' type="url" placeholder="Enter Your Image url" className="input input-bordered input-warning w-full max-w-xs" />
                        <br />

                        <textarea name='comment' className="textarea textarea-warning w-full max-w-xs" placeholder="Please Enter Your Comment"></textarea>
                        <div className="card-actions justify-end">
                        <button className="btn">submit</button>
                    </div>
                    </form>

                   
                </div>
            </div>



        </div>
    );
};

export default Review;