export default function PaymentDetails() {
    return (
        <form className="payment-details">
            <div className="personal-info">
                <h3>פרטים אישיים</h3>
                <label>שם פרטי:</label>
                <input type="text" placeholder="שם פרטי" />
                <label>שם משפחה:</label>
                <input type="text" placeholder="שם משפחה" />
                <label>טלפון:</label>
                <input type="tel" placeholder="טלפון" />
                <label>כתובת מייל:</label>
                <input type="email" placeholder="אימייל" />
            </div>
            <div className="address-info">
                <h3>כתובת</h3>
                <label>עיר:</label>
                <input type="text" placeholder="עיר" />
                <label>רחוב:</label>
                <input type="text" placeholder="רחוב" />
                <label>מספר בית:</label>
                <input type="number" placeholder="מספר בית" />
                <label>מספר דירה:</label>
                <input type="number" placeholder="מספר דירה" />
            </div>
            <div className="payment-info">
                <h3>פרטי תשלום</h3>
                <label>מספר כרטיס אשראי:</label>
                <input type="number" placeholder="מספר כרטיס אשראי" />
                <label>תוקף כרטיס אשראי:</label>
                <input type="text" placeholder="MM/YY" />
                <label>CVV:</label>
                <input type="number" placeholder="CVV" />
                <label>שם בעל הכרטיס:</label>
                <input type="text" placeholder="שם בעל הכרטיס" />
            </div>
            <div className="additional-info">
                
                <label>ברכות:</label>
                <input type="text" placeholder="ברכות" />
            </div>
            <button type="submit">שלח</button>
        </form>
    );
}
