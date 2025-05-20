import Modal from 'react-modal';
import { useState } from 'react';
import ChooseProduct from './ChooseProduct';

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


        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Product Details">
            <button className="modal-close-x" onClick={closeModal} title="סגור">×</button>
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
            {forBuying && (<ChooseProduct product={product}/>)}
            
            {/* הסר את כפתור הסגירה הישן */}
        </Modal>
    );
}

