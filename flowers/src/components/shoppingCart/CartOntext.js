import { createContext,useContext,useState } from "react";

const CartContext = createContext();
export function CartProvider({children}) {
    const [productsForBuying, setProductsForBuying] = useState([]);
    const addToCart = (product) => {
        const existingProduct = productsForBuying.find(item => item.id === product.id);
        if (existingProduct) {
            setProductsForBuying(productsForBuying.map(item => 
                item.id === product.id ? { ...item, amount: item.amount + 1 } : item
            ));
        } else {
            setProductsForBuying([...productsForBuying, { ...product, amount: 1 }]);
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
