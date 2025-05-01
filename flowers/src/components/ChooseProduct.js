import { useState } from "react";

export default function ChooseProduct(product){
    
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
    
    return(
        <button onClick={()=>addToCart(product)}>להוסיף לסל</button>
    );
}