import React from 'react';
import Product from './Product';
import './Galerry.css';

export default function Gallery({ products }) {
  return (
    <div className="gallery-container">
      {products.map(product => (
        <Product
          key={product.id}
          image={product.image}
          price={product.price}
          code={product.id}
          type={product.name}
          product={product}
        />
      ))}
    </div>
  );
}

