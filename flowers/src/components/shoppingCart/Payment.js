
import { useCart } from "./CartOntext";
import './Payment.css';
import { Link } from "react-router-dom";

export default function Payment() {
    const { productsForBuying } = useCart();

    return (
        <div className="payment-container">
            <h4>סך הכל לתשלום:</h4>
            <h3>{productsForBuying.reduce(
                (acc, element) => acc + element.price * element.amount, 0)} ₪</h3>
<Link to="/paymentDetails">
            <button className="payment-button">לתשלום כעת</button>
        </Link>
        </div>
    );
}