// import { useCart } from "./CartOntext";

// export default function Payment() {
//     const { productsForBuying } = useCart();


//     return(
//         <div className="payment-container">
//             <h4>סך הכל לתשלום:</h4>
//             <h3>{productsForBuying.reduce(
//                 (acc, element) => acc + element.price * element.amount, 0)} ₪</h3>
//             <button className="payment-button">לתשלום כעת</button>
//         </div>
//     );
// }
import { useCart } from "./CartOntext";
import './Payment.css';

export default function Payment() {
    const { productsForBuying } = useCart();

    return (
        <div className="payment-container">
            <h4>סך הכל לתשלום:</h4>
            <h3>{productsForBuying.reduce(
                (acc, element) => acc + element.price * element.amount, 0)} ₪</h3>
            <button className="payment-button">לתשלום כעת</button>
        </div>
    );
}