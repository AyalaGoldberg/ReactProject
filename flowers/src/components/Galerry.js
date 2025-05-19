import React from 'react';
import Product from './Product';
import './Galerry.css';
import { useSelector } from 'react-redux';

export default function Gallery({ searchTerm }) {
  const productsState = useSelector(state => state.products);
  const allProducts = productsState?.products || [];

  const filteredProducts = searchTerm
    ? allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allProducts;

  return (
    <div className="gallery-container">
      {filteredProducts.map(product => (
        <Product
          key={product.id}
          description={product.description}
          image={product.productImage}
          price={product.price}
          code={product.id}
          type={product.name}
          product={product}
        />
      ))}
    </div>
  );
}

