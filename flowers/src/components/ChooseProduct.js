import { useCart } from "./shoppingCart/CartOntext";
import { updateAmount } from "./shoppingCart/CartSlice";
import './ChooseProduct.css';
import React, { useState } from 'react';

export default function ChooseProduct({ product }) {
    const { addToCart } = useCart();
    const [showMsg, setShowMsg] = useState(false);

    const handleAdd = () => {
        addToCart(product);
        updateAmount(product.id, product.quantity);
        setShowMsg(true);
        setTimeout(() => setShowMsg(false), 2000);
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
        </>
    );
}