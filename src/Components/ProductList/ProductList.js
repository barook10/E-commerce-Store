import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../utils/Store';
import { useErrorContext } from '../Context/ErrorContext';
import './ProductList.css';

const ProductList = () => {
  const { error, setError } = useErrorContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data. Please try again.');
        setProducts([]);
      });
  }, [setError]);

  return (
    <div className="product-list" id='product-list'>
      {error && <div className="error-message">{error}</div>}
      {products.map(product => (
        <Link to={`/${product.id}`} key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          <p className="rating">Rating: {product.rating.rate}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
