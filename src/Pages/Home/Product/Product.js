import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { productName, price, supplierName, description, stock, _id, img } = product
    const descriptionLength = 100;
    const trimmedDescription = description.length > descriptionLength ? description.substring(0, descriptionLength) : description;

    const navigate = useNavigate()
    const handleProductDetail = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{productName}</h5>
                    {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                </div>
                <table className="table table-hover w-3/4">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='w-1/4' scope="row">Price</th>
                            <td colSpan="2">{price}</td>

                        </tr>
                        <tr>
                            <th className='w-1/4' scope="row">Supplier</th>
                            <td colSpan="2">{supplierName}</td>
                        </tr>
                        <tr>
                            <th className='w-1/4' scope="row">Description</th>
                            <td colSpan="2">{trimmedDescription}...read more</td>
                        </tr>
                        <tr>
                            <th className='w-1/4' scope="row">Stock</th>
                            <td colSpan="2">{stock}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-flex justify-content-between gap-2 px-3">
                    <button onClick={() => handleProductDetail(_id)} className="btn btn-primary" type="button">Update Stock</button>
                </div>
            </div>
        </div>

    );
};
export default Product;
// {/* <a href="https://ibb.co/3dfyKDL"><img src="https://i.ibb.co/r0bG9C1/iphone-13.png" alt="iphone-13" border="0"></a> */}
// {/* <a href="https://ibb.co/P548L1n"><img src="https://i.ibb.co/30WH3Sq/iphone-13-1.png" alt="iphone-13-1" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>multi hosting</a><br /> */}