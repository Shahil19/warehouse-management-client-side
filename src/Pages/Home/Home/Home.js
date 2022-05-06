import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import OurPartners from '../OurPartners/OurPartners';
import MainFeatures from '../ProductDetail/MainFeatures/MainFeatures';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://afternoon-harbor-69950.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const navigateToAddProduct = useNavigate()
    console.log(process.env.NAME);
    return (
        <div>
            <Banner></Banner>
            <Inventory>
                <button onClick={() => navigateToAddProduct('/addItem')} className='my-4 btn btn-primary w-2/4 mx-auto d-block'>Add Product</button>
            </Inventory>
            <Link to='/manageInventory' >
                <button className='btn btn-primary d-block mx-auto my-4'>Manage Inventories</button>
            </Link>
            <MainFeatures></MainFeatures>
            <OurPartners></OurPartners>
        </div>
    );
};

export default Home;