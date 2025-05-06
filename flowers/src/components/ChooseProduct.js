import { useCart } from "./shoppingCart/CartOntext";
import { updateAmount } from "./shoppingCart/CartSlice";

export default function ChooseProduct({ product }) { // שים לב: product צריך להיות מועבר כפרופס

    const {addToCart}= useCart(); // פרק את addToCart מתוך האובייקט שמוחזר מ-useCart

    return (
        <button onClick={() => {
            addToCart(product);
            updateAmount(product.id, product.amount);}}>להוסיף לסל</button>
    );
}