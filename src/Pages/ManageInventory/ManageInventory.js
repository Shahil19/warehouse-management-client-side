import React, { useEffect, useState } from 'react';
import useProduct from '../../hooks/useProduct';
import Product from '../Home/Product/Product';

const ManageInventory = () => {

    const [products, setProducts] = useProduct()

    return (
        <div>
            <h1 className='text-center'>Manage All Products</h1>
            <div className="row row-cols-1 row-cols-md-2  g-4 container mx-auto">
                {
                    products.map(product => (
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageInventory;