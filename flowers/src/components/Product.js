import React from "react";
const Product = ({ image, price, code, type }) => {
    return (
      <div className="product-card">
        <img src={image} alt={type} />
        <h2>{type}</h2>
        <p>Product Code: {code}</p>
        <p>Price: ${price}</p>
      </div>
    );
  };
  
  export default Product;
  