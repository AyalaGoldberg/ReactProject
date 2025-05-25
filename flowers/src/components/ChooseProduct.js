import { useCart } from "./shoppingCart/CartOntext";
import { updateAmount } from "./shoppingCart/CartSlice";
import './ChooseProduct.css';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function ChooseProduct({ product, onChoose }) {
    const { addToCart } = useCart();
    const [showMsg, setShowMsg] = useState(false);
    const [showBTN, setShowBTN] = useState(false);
    const navigate = useNavigate();
    const actionsRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (showBTN && actionsRef.current) {
            actionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [showBTN]);

    const handleAdd = () => {
        addToCart(product);
        updateAmount(product.id, product.quantity);
        setShowMsg(true);
        setTimeout(() => {
            setShowMsg(false);
        }, 2000);
        setShowBTN(true);
    };

    return (
        <>
            <button className="add-to-cart-btn" onClick={handleAdd}>
                להוסיף לסל
            </button>
            {showMsg && (
                <div className="cart-toast">
                    המוצר נוסף לעגלה!
                </div>
            )}
            {showBTN && (
                <div className="modal-actions" ref={actionsRef}>
                    <button className="action-btn" onClick={() => {
                        if (onChoose) onChoose();
                        
                        setIsModalOpen(false);
                        setTimeout(() => navigate("/"), 100);
                    }}>להמשיך בקניות</button>
                    <button className="action-btn" onClick={() => {
                        if (onChoose) onChoose();
                        setTimeout(() => navigate("/shoppingBasket"), 100);
                    }}>מעבר לעגלה</button>
                </div>
            )}
        </>
    );
}