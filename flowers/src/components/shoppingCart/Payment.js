import { useCart } from "./CartOntext";
import './Payment.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCartModal from "./EmptyCartModal";

export default function Payment() {
    const { productsForBuying } = useCart();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toPay = () => {
        if (productsForBuying.length === 0) {
            setIsModalOpen(true); // הצגת המודל אם העגלה ריקה
        } else {
            alert("תשלום בוצע בהצלחה"); // הודעה לפני הניווט
            navigate("/paymentDetails"); // ניווט לדף פרטי התשלום
        }
    };

    return (
        <div className="payment-container">
            <h4>סך הכל לתשלום:</h4>
            <h3>{productsForBuying.reduce(
                (acc, element) => acc + element.price * element.amount, 0)} ₪</h3>
            <button className="payment-button" onClick={toPay}>לתשלום כעת</button>
            <EmptyCartModal 
                isOpen={isModalOpen} 
                onRequestClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
}