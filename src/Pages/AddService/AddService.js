import React, { useContext } from 'react';
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);

    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const description = form.description.value;
        const price = form.price.value;

        console.log(name,url,price,description);

        const service = {
            service:name,
            img: url,
            description,
            price

            
        }

        fetch('http://localhost:5000/add-service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                alert("successfully added");
                form.reset();
            })
            .catch(er => console.log(er))

    }

    return (
        <div>
            <div className="card  bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className='card-title'>You are Adding a new service</h2>
                    <form onSubmit={handleAddService}>
                        <input name='name' type="text" placeholder=" please Enter Service name" className="input input-bordered input-warning w-full max-w-xs" />
                        <br />
                        <input name='url' type="url" placeholder="Please Enter Service Image url" className="input input-bordered input-warning w-full max-w-xs" />
                        <br />
                        <input name='price' type="text" placeholder=" please Enter Service price" className="input input-bordered input-warning w-full max-w-xs" />
                        <br />
                        <input name='description' type="text" placeholder=" please Enter Service description" className="input input-bordered input-warning w-full max-w-xs" />
                        <br />

                        <div className="card-actions justify-end">
                            <button className="btn">submit</button>
                        </div>
                    </form>


                </div>
            </div>



        </div>
    );
};

export default AddService;