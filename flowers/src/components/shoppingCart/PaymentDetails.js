import './PaymentDetails.css';

export default function PaymentDetails() {
    return (
        <form className="payment-details">
            <div className="personal-info section">
                <h3>פרטים אישיים</h3>
                <div className="row">
                    <div>
                        <label>שם פרטי:</label>
                        <input type="text" placeholder="שם פרטי" required />
                    </div>
                    <div>
                        <label>שם משפחה:</label>
                        <input type="text" placeholder="שם משפחה" required />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label>טלפון:</label>
                        <input type="tel" placeholder="טלפון" required />
                    </div>
                    <div>
                        <label>כתובת מייל:</label>
                        <input type="email" placeholder="אימייל" required />
                    </div>
                </div>
            </div>

            <div className="address-info section">
                <h3>כתובת</h3>
                <div className="row">
                    <div>
                        <label>עיר:</label>
                        <input type="text" placeholder="עיר" required />
                    </div>
                    <div>
                        <label>רחוב:</label>
                        <input type="text" placeholder="רחוב" required />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label>מספר בית:</label>
                        <input type="number" placeholder="מספר בית" required />
                    </div>
                    <div>
                        <label>מספר דירה:</label>
                        <input type="number" placeholder="מספר דירה" />
                    </div>
                </div>
            </div>

            <div className="payment-info section">
                <h3>פרטי תשלום</h3>
                <div className="row">
                    <div>
                        <label>מספר כרטיס אשראי:</label>
                        <input
                            type="text"
                            placeholder="XXXX XXXX XXXX XXXX"
                            maxLength="19"
                            required
                            onInput={(e) => {
                                e.target.value = e.target.value
                                    .replace(/\D/g, '') // Remove non-digit characters
                                    .replace(/(.{4})/g, '$1 ') // Add space every 4 digits
                                    .trim(); // Remove trailing space
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label>תוקף כרטיס אשראי:</label>
                        <input type="text" placeholder="MM/YY" required />
                    </div>
                    <div>
                        <label>CVV:</label>
                        <input type="number" placeholder="CVV" required />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label>שם בעל הכרטיס:</label>
                        <input type="text" placeholder="שם בעל הכרטיס" required />
                    </div>
                </div>
            </div>

            <div className="additional-info section">
                <label>ברכות:</label>
                <input type="text" placeholder="ברכות" className="large-input" />
            </div>

            <button type="submit">שלח</button>
        </form>
    );
}

