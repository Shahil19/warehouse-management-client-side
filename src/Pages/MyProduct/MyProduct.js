import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProduct = () => {
    const [currentUser] = useAuthState(auth);
    const email = currentUser?.email

    // const [myProduct, setMyProduct] = useState([])
    // useEffect(() => {
    //     const url = `https://afternoon-harbor-69950.herokuapp.com/userProduct/${email}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setMyProduct(data))
    //     console.log('sh');
    // })

    // console.log(myProduct);
    return (
        <div>
            <h2>My Products</h2>
        </div>
    );
};

export default MyProduct;