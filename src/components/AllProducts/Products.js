import React, { useEffect, useState } from 'react';
import './Products.css'
import Singleproduct from './SingleProduct/Singleproduct';

const Products = ({setCartCount}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)

    return (
        <div>
            <h1>All product</h1>
            <div className="row container mx-auto">
                {
                    products.map(product => <Singleproduct
                        setCartCount={setCartCount}
                        product={product}
                        key={product.id}
                    ></Singleproduct>)
                }
            </div>

        </div>
    );
};

export default Products;