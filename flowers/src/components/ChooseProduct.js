import { useCart } from "./shoppingCart/CartOntext";

export default function ChooseProduct({ product }) { // שים לב: product צריך להיות מועבר כפרופס

    const {addToCart}= useCart(); // פרק את addToCart מתוך האובייקט שמוחזר מ-useCart

    return (
        <button onClick={() => addToCart(product)}>להוסיף לסל</button>
    );
}