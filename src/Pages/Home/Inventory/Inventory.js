import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import Product from '../Product/Product';

const Inventory = ({ handleDeleteProduct }) => {
    const [products, setProducts] = useProduct()

    const navigateToAddProduct = useNavigate()
    return (
        <div >
            <h2 className='text-center'>Inventory</h2>

            <div className="row row-cols-1 row-cols-md-2  g-4 container mx-auto">
                {
                    products.map(product => (
                        <Product
                            key={product._id}
                            product={product}
                            handleDeleteProduct={handleDeleteProduct}
                        ></Product>
                    ))
                }

            </div>
            {/* <button onClick={() => navigateToAddProduct('/addItem')} className='my-4 btn btn-primary w-2/4 mx-auto d-block'>Add Product</button> */}
        </div>
    );
};

export default Inventory;