import React, { useState } from "react";
import Modal from 'react-modal';
import ChooseProduct from "./ChooseProduct";

Modal.setAppElement('#root'); // חשוב למניעת אזהרות

function Product({ image, price, code, type, product, addToCart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="product-card">
      <img src={image} alt={type} />
      <h2>{type}</h2>
      <p>Product Code: {code}</p>
      <p>Price: ${price}</p>
      {/* כפתור לפתיחת המודאל */}
      <button onClick={openModal}>פרטים</button>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Product Details">
        <h2>{product?.name || type}</h2>
        <img src={product?.image || image} alt={product?.name || type} style={{ width: '100%' }} />
        <p>{product?.description}</p>
        <p>מחיר: {product?.price || price} ₪</p>
        <label>
          כמות:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </label>
        <ChooseProduct product={{
          id: product?.id,
          name: product?.name || type,
          description: product?.description,
          price: product?.price || price,
          image: product?.image || image,
          quantity
        }} />
        {/* כפתור לסגירת המודאל */}
        <button onClick={closeModal}>סגור</button>
      </Modal>
    </div>
  );
}

export default Product;
