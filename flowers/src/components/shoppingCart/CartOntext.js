import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export function CartProvider({ children }) {
    const [productsForBuying, setProductsForBuying] = useState([]);
    const [showMsg2, setShowMsg2] = useState(false);

    const removeItem = (id) => {
        const updatedProducts = productsForBuying.filter((item) => item.id !== id);
        setProductsForBuying(updatedProducts);
        setShowMsg2(true);
        setTimeout(() => setShowMsg2(false), 2000);
    }
    const addToCart = (product) => {
        const quantityToAdd = product.amount || product.quantity || 1;
        const existingProduct = productsForBuying.find(item => item.id === product.id);
        if (existingProduct) {
            setProductsForBuying(productsForBuying.map(item =>
                item.id === product.id ? { ...item, amount: item.amount + quantityToAdd } : item
            ));
        } else {
            setProductsForBuying([...productsForBuying, { ...product, amount: quantityToAdd }]);
        }
    }

    const cleanCart = () => {
        setProductsForBuying([]);
    }
    return (
        <CartContext.Provider value={{ productsForBuying, addToCart, removeItem, cleanCart }}>
            {children}
            {showMsg2 && (
                <div className="cart-toast">
                    המוצר הוסר מהעגלה!
                </div>
            )}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}