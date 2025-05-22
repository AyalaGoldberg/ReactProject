import React, { useState } from "react";
import ProductModal from "./ProductModal";
import './Product.css';
import { useCart } from "./shoppingCart/CartOntext";

function Product({ image, description, price, code, type, product }) {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const openModal = () => setIsModalOpen(true);
// כאן מאפסים את הכמות רק בסגירה!
const closeModal = () => {
    setIsModalOpen(false);
    setQuantity(1);
};

const handleAddToCart = () => {
    addToCart({ ...product, amount: quantity });
    setIsModalOpen(false);
    setQuantity(1); // אפשר גם כאן, אבל עדיף רק בסגירה
};

  return (
    <div className="product-card" onClick={openModal} style={{ cursor: "pointer" }}>
      <img src={image} alt={type} />
      <h2>{type}</h2>
      <p>{description}</p>
      <p>מחיר: {price} ₪</p>
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
    </div>
  );
}

export default Product;