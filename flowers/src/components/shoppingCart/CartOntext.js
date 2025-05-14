import { createContext,useContext,useState } from "react";

const CartContext = createContext();
export function CartProvider({children}) {
    const [productsForBuying, setProductsForBuying] = useState([]);
    const removeItem = (id) => {
        const updatedProducts = productsForBuying.filter((item) => item.id !== id);
        setProductsForBuying(updatedProducts);
    }
    const addToCart = (product) => {
        const quantityToAdd = product.quantity || 1;
        const existingProduct = productsForBuying.find(item => item.id === product.id);
        if (existingProduct) {
            setProductsForBuying(productsForBuying.map(item => 
                item.id === product.id ? { ...item, amount: item.amount + quantityToAdd } : item
            ));
        } else {
            setProductsForBuying([...productsForBuying, { ...product, amount: quantityToAdd }]);
        }
    }
    return (
        <CartContext.Provider value={{ productsForBuying, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
