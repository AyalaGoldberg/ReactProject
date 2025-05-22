import React, { useState } from "react";
import Modal from 'react-modal';
import ChooseProduct from "./ChooseProduct";
import './Product.css';
import ProductModal from "./ProductModal";
import { useCart } from "./shoppingCart/CartOntext";

Modal.setAppElement('#root'); // חשוב למניעת אזהרות

function Product({ image, description, price, code, type, product }) {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    closeModal();
  };

  const handleAddToCart = () => {
    // ודא שהכמות מועברת נכון
    addToCart({ ...product, quantity });
    setIsModalOpen(false);
    setQuantity(1);
  };

  return (
    <div className="product-card" onClick={openModal} style={{ cursor: "pointer" }}>
      <img src={image} alt={type} />
      <h2>{type}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <ProductModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        product={product}
        type={type}
        image={image}
        quantity={quantity}
        setQuantity={setQuantity}
        forBuying={true}
        onAddToCart={handleAddToCart}
        />

    </div>
  );
}

export default Product;
