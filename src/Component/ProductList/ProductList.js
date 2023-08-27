// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../utils/store';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-item" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating.rate}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
