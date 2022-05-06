import { useNavigate } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import Product from '../Product/Product';

const Inventory = ({ handleDeleteProduct }) => {
    const [products, setProducts] = useProduct()
    products.length = 6

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
        </div>
    );
};

export default Inventory;