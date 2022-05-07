import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Product from '../Home/Product/Product';

const MyProduct = () => {
    const [currentUser] = useAuthState(auth);
    const email = currentUser?.email

    const [userProduct, setUserProduct] = useState([])
    console.log(userProduct);

    useEffect(() => {
        fetch(`https://afternoon-harbor-69950.herokuapp.com/user/${email}`)
            .then(res => res.json())
            .then(data => setUserProduct(data))
    }, [])

    // console.log(myProduct);
    return (
        <div>
            <h2 className='text-center'>My Products </h2>
            <div className="row row-cols-1 row-cols-md-2  g-4 container mx-auto">
                {
                    userProduct.map(product => (
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

export default MyProduct;