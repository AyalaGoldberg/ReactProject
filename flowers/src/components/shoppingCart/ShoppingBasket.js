import AdditionalProducts from './AdditionalProducts';
import Payment from './Payment';
import { useState } from 'react';
import ProductModal from '../ProductModal';

import './ShoppingBasket.css';
import { useCart } from './CartOntext';


export default function ShoppingBasket() {
    const { productsForBuying, removeItem } = useCart();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    }

    return (
        <>
            <div className="main-container">
                <div className="shopping-basket-container">
                    {productsForBuying.length === 0 ? (
                        <div className="empty-basket">
                            <h3>סל הקניות שלך ריק כרגע</h3>
                            <h1>🛒</h1>
                        </div>
                    ) : (
                        productsForBuying.map((element) => (
                            <div className="product-card"
                                key={element.id}
                                onClick={() => openModal(element)}
                                style={{ cursor: "pointer" }}
                            >
                                <button
                                    className="remove-button"
                                    onClick={e => {
                                        e.stopPropagation();
                                        removeItem(element.id);
                                    }}
                                >
                                    X
                                </button>
                                <img src={element.productImage} alt={element.name} />
                                <div>
                                    <p>{element.name}</p>
                                    <p>{element.price} ₪</p>
                                    <p>כמות: {element.amount}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="payment-container-wrapper">
                    <Payment />
                </div>
            </div>
            <AdditionalProducts />
            {selectedProduct && (
                <ProductModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    product={selectedProduct}
                    type={selectedProduct.name}
                    image={selectedProduct.productImage}
                    quantity={selectedProduct.amount}
                    forBuying={false}
                />
            )}
        </>
    );
}