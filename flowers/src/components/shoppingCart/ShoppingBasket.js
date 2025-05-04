// import AdditionalProducts from './AdditionalProducts';
// import Payment from './Payment';

// import './ShoppingBasket.css';
// import { useCart } from './CartOntext';
// import { useState } from 'react';

// export default function ShoppingBasket() {


//     const { productsForBuying } = useCart();



//     return (
//         <>
//         <div className="shopping-basket-container">
//             {productsForBuying.length === 0 ? (
//                 <h3>סל הקניות שלך ריק כרגע</h3>
//             ) : (
//                 productsForBuying.map((element) => (
//                     <div className="product-card" key={element.id}>
//                         <img src={element.img} alt={element.name} />
//                         <div>
//                             <p>{element.name}</p>
//                             <p>{element.price} ₪</p>
//                             <p>כמות: {element.amount}</p>
//                         </div>
//                     </div>
//                 ))
//             )}

//         </div>

//         <Payment></Payment>
//         <AdditionalProducts></AdditionalProducts>
//         </>
//     );
// }






import AdditionalProducts from './AdditionalProducts';
import Payment from './Payment';

import './ShoppingBasket.css';
import { useCart } from './CartOntext';

export default function ShoppingBasket() {
    const { productsForBuying } = useCart();

    return (
        <>
          
                <div className="shopping-basket-container">
                    {productsForBuying.length === 0 ? (
                        <h3>סל הקניות שלך ריק כרגע</h3>
                    ) : (
                        productsForBuying.map((element) => (
                            <div className="product-card" key={element.id}>
                                <img src={element.img} alt={element.name} />
                                <div>
                                    <p>{element.name}</p>
                                    <p>{element.price} ₪</p>
                                    <p>כמות: {element.amount}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <Payment></Payment>
            


            <AdditionalProducts />
        </>
    );
}