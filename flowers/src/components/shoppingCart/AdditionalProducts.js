import './AdditionalProducts.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductModal from '../ProductModal';
import { useCart } from './CartOntext';

export default function AdditionalProducts() {
    const Extras = useSelector((state) => state.cart); // או כל מקור נתונים אחר
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCart();

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
        setQuantity(1);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleAddToCart = () => {
        addToCart({ ...selectedProduct, amount: quantity });
        closeModal();
    };

    return (
        <>
            <h2>:למתנה מושלמת👌</h2>
            <div className="extras-container">
                {Extras.map((element, index) => (
                    <div
                        onClick={() => openModal(element)}
                        style={{ cursor: "pointer" }}
                        className="extra-card"
                        key={index}
                    >
                        <img src={element.productImage} alt={element.name} />
                        <h4>{element.name}</h4>
                        <p>{element.price} ₪</p>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <ProductModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    product={selectedProduct}
                    type={selectedProduct?.name}
                    image={selectedProduct?.productImage}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    forBuying={true}
                    onAddToCart={handleAddToCart}
                />
            )}
        </>
    );
}