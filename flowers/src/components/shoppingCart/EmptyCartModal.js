import React from "react";
import Modal from "react-modal";
import "./EmptyCartModal.css";
export default function EmptyCartModal({ isOpen, onRequestClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Empty Cart Modal"
            className="empty-cart-modal"
            overlayClassName="empty-cart-overlay"
        >
            <div className="empty-cart-icon">🛒</div>
            <h2>העגלה ריקה</h2>
            <p>נראה שאין לך מוצרים בעגלה.</p>
            <button onClick={onRequestClose}>סגור</button>
        </Modal>
    );
}
