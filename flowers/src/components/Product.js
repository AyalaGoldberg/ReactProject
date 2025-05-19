import React, { useState } from "react";
import Modal from 'react-modal';
import ChooseProduct from "./ChooseProduct";
import './Product.css';

Modal.setAppElement('#root'); // חשוב למניעת אזהרות

function Product({ image,description, price, code, type, product, addToCart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // const handleAddToCart = (e) => {
  //   e.stopPropagation();
  //   addToCart({ ...product, quantity });
  //   closeModal();
  // };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <div className="product-card" onClick={openModal} style={{ cursor: "pointer" }}>
      <img src={image} alt={type} />
      <h2>{type}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Product Details">
        <button className="modal-close-x" onClick={handleCloseModal} title="סגור">×</button>
        <div className="modal-content-flex">
          <div className="modal-image-col">
            <img src={product.image || image} alt={product.name || type} />
          </div>
          <div className="modal-info-col">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>מחיר: {product.price} ₪</p>
            <label>
              כמות:
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                onClick={e => e.stopPropagation()}
              />
            </label>
          </div>
        </div>
        <ChooseProduct product={product} onChoose={closeModal} />
        {/* הסר את כפתור הסגירה הישן */}
      </Modal>
    </div>
  );
}

export default Product;
