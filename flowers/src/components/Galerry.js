import React from 'react';
import Product from './Product';

export default function Gallery({ products }) {
  return (
    <div>
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

