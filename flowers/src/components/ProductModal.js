import Modal from 'react-modal';
import './ProductModal.css';

export default function ProductModal({
    isOpen,
    onRequestClose,
    product,
    type,
    image,
    quantity,
    setQuantity,
    forBuying,
    onAddToCart
}) {
    // עוטפים את הפונקציות בעצירת bubbling
    const handleClose = (e) => {
        e.stopPropagation();
        onRequestClose();
    };

    const handleAdd = (e) => {
        e.stopPropagation();
        onAddToCart();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Product Details">
            <button className="modal-close-x" onClick={handleClose} title="סגור">×</button>
            <div className="modal-title-centered">
                <h2>{product.name}</h2>
            </div>
            <div className="modal-content-flex-vertical">
                <div className="modal-image-col-centered">
                    <img src={product.image || image} alt={product.name || type} />
                </div>
                <div className="modal-info-col-centered">
                    <div className="modal-desc">{product.description}</div>
                    <div className="modal-price">מחיר: {product.price} ₪</div>
                    <div className="modal-qty">
                        כמות: {
                            forBuying ? (
                                <input
                                    type="number"
                                    min="1"
                                    value={typeof quantity === "number" ? quantity : 1}
                                    onChange={e => {
                                        if (typeof setQuantity === "function") {
                                            setQuantity(Number(e.target.value));
                                        }
                                    }}
                                    style={{ width: "48px", textAlign: "center" }}
                                    onClick={e => e.stopPropagation()}
                                />
                            ) : (
                                <span>{typeof quantity === "number" ? quantity : 1}</span>
                            )
                        }
                    </div>
                    {forBuying && (
                        <button
                            className="add-to-cart-btn"
                            onClick={handleAdd}
                            style={{ marginTop: "16px" }}
                        >
                            הוסף לעגלה
                        </button>
                    )}
                </div>
            </div>
        </Modal>
    );
}