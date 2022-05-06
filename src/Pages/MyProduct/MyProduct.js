import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProduct = () => {
    const [currentUser] = useAuthState(auth);
    const email = currentUser?.email

    const [userProduct, setUserProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/userProduct')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    // console.log(myProduct);
    return (
        <div>
            <h2>My Products</h2>
        </div>
    );
};

export default MyProduct;