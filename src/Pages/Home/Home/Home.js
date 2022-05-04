import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    const [products, setProducts] = useState([])
    console.log(products);
    useEffect(() => {
        fetch('https://afternoon-harbor-69950.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className="text-center text-cyan-500 text-6xl font-bold underline">
                Hello world!
            </h1>
            <Banner></Banner>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;