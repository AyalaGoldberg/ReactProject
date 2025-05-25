import React, { useState } from "react";
import ProductModal from "./ProductModal";
import './Product.css';
import { useCart } from "./shoppingCart/CartOntext";

function Product({ image, description, price, code, type, product }) {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const openModal = () => {
    setQuantity(1);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, amount: quantity });
    setIsModalOpen(false);
    setQuantity(1);
  };

  return (
    <>
      <div className="product-card" style={{ cursor: "pointer" }} onClick={openModal}>
        <img src={image} alt={type} />
        <h2>{type}</h2>
        <p>{description}</p>
        <p>מחיר: {price} ₪</p>
      </div>
      {isModalOpen && (
        <ProductModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          product={product}
          type={type}
          image={image}
          quantity={quantity}
          setQuantity={setQuantity}
          forBuying={true}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}

export default Product;