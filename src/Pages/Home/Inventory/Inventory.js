import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Inventory = () => {
    const [products, setProducts] = useState([])
    const inventoryProducts = products.length
    console.log(inventoryProducts);
    useEffect(() => {
        fetch('https://afternoon-harbor-69950.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div >
            <h2 className='text-center'>Inventory {products.length}</h2>

            <div className="row row-cols-1 row-cols-md-2  g-4 container mx-auto">
                {
                    products.map(product => (
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>
                    ))
                }
                {

                }
            </div>

        </div>
    );
};

export default Inventory;