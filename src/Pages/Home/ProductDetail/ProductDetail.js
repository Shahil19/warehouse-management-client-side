import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductDetail from '../../../hooks/useProductDetail';

const ProductDetail = () => {
    const { register, handleSubmit, reset } = useForm();
    const id = useParams().id

    const [productDetail, setProductDetail] = useProductDetail(id)
    const { productName, description, stock, supplierName, img, price } = productDetail;
    // ----------------- update stock
    const updateStock = data => {
        const updatedStock = parseInt(stock) + parseInt(data.stock)
        console.log({ stock: updatedStock });
        fetch(`https://afternoon-harbor-69950.herokuapp.com/product/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ stock: updatedStock }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {

                console.log(json)
            });
        reset()
    };

    const navigate = useNavigate();
    const handleDeleteProduct = (product) => {
        console.log('product detail');
        const { productName, _id } = product;
        const proceed = window.confirm(
            `Are you sure you want to delete ${productName}`
        );
        if (proceed) {
            fetch(`https://afternoon-harbor-69950.herokuapp.com/product/${_id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    toast.error(`${productName} deleted!!`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    navigate("/");
                });
        }
    };

    // deliver one item
    const handleDeliverProduct = () => {
        // console.log('deliver 1 item');
        const updatedStock = parseInt(stock) - 1
        console.log({ stock: updatedStock });
        fetch(`https://afternoon-harbor-69950.herokuapp.com/product/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ stock: updatedStock }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                toast.success(`🦄 One product delivered`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                // console.log(json)
            });
    }

    return (
        <div className='container mx-autos'>
            <h2 className='text-center'>Product Detail</h2>

            <div className="card mb-3">
                <img src={img} style={{ maxHeight: '50vh' }} className=" mx-auto" alt="..." />
                <div className="table-responsive">
                    <h4 className='text-center'>{productName}</h4>
                    <table className="table w-3/4">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <th className=' md:w-1/4 w-1/3' scope="row">Product</th>
                                <td colSpan="2">{productName}</td>
                            </tr>
                            <tr>
                                <th className='md:w-1/4 w-1/3' scope="row">Price</th>
                                <td colSpan="2">{price}</td>
                            </tr>
                            <tr>
                                <th className='md:w-1/4 w-1/3' scope="row">Supplier</th>
                                <td colSpan="2">{supplierName}</td>
                            </tr>
                            <tr>
                                <th className='md:w-1/4 w-1/3' scope="row">Description</th>
                                <td colSpan="2">{description}</td>
                            </tr>
                            <tr>
                                <th className='md:w-1/4 w-1/3' scope="row">Product ID</th>
                                <td colSpan="2">{id}</td>
                            </tr>
                            <tr>
                                <th className='md:w-1/4 w-1/3' scope="row">Stock</th>
                                <td colSpan="2">{stock}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='d-flex justify-around'>
                        {/* <button onClick={handleUpdateProduct} className="btn btn-success mx-auto w-1/3 d-block">Update Stock</button> */}
                        <button onClick={() => handleDeliverProduct(productDetail)} className="btn btn-success mx-auto w-1/3 d-block mb-2">Deliver Product</button>
                        <button onClick={() => handleDeleteProduct(productDetail)} className="btn btn-danger mx-auto w-1/3 d-block mb-2">Delete Product</button>
                    </div>
                </div>
            </div>

            {/* Update stock Quantity */}
            <table className="table w-3/4">
                <tbody>
                    <tr>
                        <th className='md:w-1/4 w-1/3' scope="row">Add or Lessen Stock</th>
                        <td colSpan="2">
                            <form onSubmit={handleSubmit(updateStock)}>
                                <div className="mb-3 form-check">
                                    <input className="form-control" type="number" {...register("stock", { required: true })} placeholder="Positive or Negative number" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input className="btn btn-primary" type="submit" value='Update Stock' />
                                </div>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default ProductDetail;