import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://afternoon-harbor-69950.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const navigateToAddProduct = useNavigate()

    return (
        <div>
            <Banner></Banner>
            <Inventory>
                <button onClick={() => navigateToAddProduct('/addItem')} className='my-4 btn btn-primary w-2/4 mx-auto d-block'>Add Product</button>
            </Inventory>

            <Link to='/inventory' >
                <button className='btn btn-primary d-block mx-auto'>Manage Inventories</button>
            </Link>
        </div>
    );
};

export default Home;