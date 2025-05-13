import AdditionalProducts from './AdditionalProducts';
import Payment from './Payment';


import './ShoppingBasket.css';
import { useCart } from './CartOntext';


export default function ShoppingBasket() {
    const { productsForBuying, removeItem } = useCart();

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
                            <div className="product-card" key={element.id}>
                                <button className="remove-button" onClick={() => removeItem(element.id)}>X</button>
                                <img src={element.image} alt={element.name} />
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
        </>
    );
}