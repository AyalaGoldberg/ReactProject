import { useCart } from "./shoppingCart/CartOntext";
import { updateAmount } from "./shoppingCart/CartSlice";

export default function ChooseProduct({ product }) {
    const { addToCart } = useCart();

    return (
        <button onClick={() => {
            addToCart(product);
            updateAmount(product.id, product.quantity); // השתמש ב-quantity במקום amount
        }}>
            להוסיף לסל
        </button>
    );
}