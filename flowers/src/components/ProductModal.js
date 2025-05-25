import Modal from 'react-modal';
import { useState } from 'react';
import ChooseProduct from './ChooseProduct';
import './ProductModal.css';

export default function ProductModal({ 
    isOpen,
    onRequestClose,
    product,
    type,
    image,
    quantity,
    setQuantity,
    forBuying }) {

    const closeModal = (e) => {
        onRequestClose(e);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Product Details"
            shouldCloseOnOverlayClick={true}
            ariaHideApp={false} // הוסף שורה זו אם יש בעיות נגישות
        >
            <button className="modal-close-x" onClick={closeModal} title="סגור">×</button>
            <div className="modal-title-centered">
                <h2>{product.name}</h2>
            </div>
            <div className="modal-content-flex-vertical">
                <div className="modal-image-col-centered">
                    <img src={product.image || image} alt={product.name || type} />
                </div>
                <div className="modal-info-col-centered">
                    <div className="modal-desc">{product.description}</div>
                    <div className="modal-price">מחיר: {product.price} ₪</div>
                    <div className="modal-qty">
                        כמות: {
                            forBuying ? (
                                <input
                                    type="number"
                                    min="1"
                                    value={typeof quantity === "number" ? quantity : 1}
                                    onChange={e => {
                                        if (typeof setQuantity === "function") {
                                            setQuantity(Number(e.target.value));
                                        }
                                    }}
                                    onClick={e => e.stopPropagation()}
                                    style={{ width: "48px", textAlign: "center" }}
                                />
                            ) : (
                                <span>{typeof quantity === "number" ? quantity : 1}</span>
                            )
                        }
                    </div>
                </div>
            </div>
            {forBuying && (<ChooseProduct product={product}/>)}
        </Modal>
    );
}

