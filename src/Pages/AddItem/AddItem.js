import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [currentUser] = useAuthState(auth);
    const navigate = useNavigate()


    const onSubmit = data => {
        const email = currentUser.email;

        // POST fetch
        fetch('https://afternoon-harbor-69950.herokuapp.com/product', {
            method: 'POST',
            body: JSON.stringify({
                ...data, email
            }),
            headers: {
                'authorization': `${email} ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.insertedId) {
                    toast.success(`🦄 ${data.productName} added`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    navigate('/manageInventory')
                } else {
                    toast.error(`${json.user} `, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }


            });
        reset()
    };
    return (
        <div>
            <h2 className='text-center mt-4'>Add A Product</h2>
            <div style={{ minHeight: '85vh' }} className='d-flex justify-content-center align-items-center'>
                <form className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 form-check">
                        <input className="form-control" {...register("productName", { required: true, maxLength: 20 })} placeholder="Product Name" />
                    </div>
                    <div className="mb-3 form-check">
                        <input className="form-control" {...register("supplierName", { required: true })} placeholder="Supplier Name" />
                    </div>
                    <div className="mb-3 form-check">
                        <textarea className="form-control" {...register("description")} placeholder="Description" />
                    </div>
                    <div className="mb-3 form-check">
                        <input className="form-control" type="number" {...register("stock")} placeholder="Quantity" />
                    </div>
                    <div className="mb-3 form-check">
                        <input className="form-control" type="number" {...register("price")} placeholder="Price" />
                    </div>
                    <div className="mb-3 form-check">
                        <input className="form-control" {...register("img")} placeholder="Image Link" />
                    </div>
                    <div className="mb-3 form-check">
                        <input className="btn btn-primary" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;