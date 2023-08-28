import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../utils/Store'; // Adjust the import path
import { useErrorContext } from '../Context/ErrorContext';
import './ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { error, setError } = useErrorContext();

  useEffect(() => {
    fetchProducts()
      .then(data => {
        const selectedProduct = data.find(item => item.id === parseInt(id));
        setProduct(selectedProduct);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setError('An error occurred while fetching the product. Please try again.');
        setProduct(null);
      });
  }, [id, setError]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      {error && <div className="error-message">{error}</div>}
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>{product.category}</h3>
      <p className="price">${product.price}</p>
      <p className="rating">{`Rating: ${product.rating.rate} Count: ${product.rating.count}`}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
