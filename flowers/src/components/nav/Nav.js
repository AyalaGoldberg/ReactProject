// import React, { useState } from "react";
// import logo from "../../images/logo.png";
// import "./NavBar.css";
// import { Link } from "react-router-dom";
// import { useRef} from "react";
// import { useSelector } from "react-redux";

// // רשימת מוצרים לדוגמה


// export default function Nav({ searchTerm, setSearchTerm }) {
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const productsState = useSelector(state => state.products);

//     const userSelected=useRef(false);

//     const mockProducts = productsState?.products.map(product => product.name) || [];
//     const handleSearch = (e) => {
//          userSelected.current = false;
//         setFilteredProducts(
//             mockProducts.filter(product =>
//                 product.toLowerCase().includes(e.target.value.toLowerCase())
//             )
//         );
//         setSearchTerm(e.target.value);
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">
//                 <Link to="/">
//                 <img src={logo} alt="Logo" />
//                 </Link>
//             </div>
//             <ul className="navbar-links">
//                 <li><Link to="/">עמוד הבית</Link></li>
//                 <li><Link to="/about">אודותינו</Link></li>
//                 <li><Link to="/shop">חנות</Link></li>
//                 <li><Link to="/contact">ליצירת קשר</Link></li>
//             </ul>
//             <div className="navbar-actions">
//                 <div className="search-area">
//                     <input
//                         type="text"
//                         placeholder="לחיפוש מוצר..."
//                         className="navbar-search"
//                         value={searchTerm}
//                         onChange={handleSearch}
//                     />
//                     <div className="search-results-container">
//                         {filteredProducts.length > 0 && searchTerm ? (
//                             <ul className="search-results">
//                                 {filteredProducts.map((product, index) => (
//                                     <li
//                                         key={index}
//                                         onClick={() => {
//                                             setSearchTerm(product);
//                                             setFilteredProducts([]);
//                                             userSelected.current = true;
//                                         }}
//                                         style={{ cursor: "pointer" }}
//                                     >
//                                         {product}
//                                     </li>
//                                 ))}
//                             </ul>
//                         ) : (searchTerm && userSelected) ? (
//                             <p className="no-results">מצטערים. לא נמצאו פריטים התואמים את החיפוש שלך</p>
//                         ) : null}
//                     </div>
//                 </div>
//                 <Link to="/shoppingBasket">
//                     <button className="navbar-cart">🛒</button>
//                 </Link>
//             </div>
//         </nav>
// }



import React, { useState, useRef } from "react";
import logo from "../../images/logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCart } from "../shoppingCart/CartOntext";

export default function Nav({ searchTerm, setSearchTerm, showSearch }) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const productsState = useSelector(state => state.products);
    const userSelected = useRef(false);
    const { productsForBuying } = useCart();
    const cartCount = productsForBuying.reduce((sum, item) => sum + (item.amount || 1), 0);

    const mockProducts = productsState?.products.map(product => product.name) || [];

    const handleSearch = (e) => {
        const value = e.target.value;
        userSelected.current = false; // אפס את הדגל כשמשתמש מקליד
        setFilteredProducts(
            mockProducts.filter(product =>
                product.toLowerCase().includes(value.toLowerCase())
            )
        );
        setSearchTerm(value);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">עמוד הבית</Link></li>
                <li><Link to="/about">אודותינו</Link></li>
                <li><Link to="/shop">חנות</Link></li>
                <li><Link to="/contact">ליצירת קשר</Link></li>
            </ul>
            <div className="navbar-actions">
                {showSearch && (
                  <div className="search-area">
                    <input
                        type="text"
                        placeholder="לחיפוש מוצר..."
                        className="navbar-search"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <div className="search-results-container">
                        {filteredProducts.length > 0 && searchTerm ? (
                            <ul className="search-results">
                                {filteredProducts.map((product, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setSearchTerm(product);
                                            setFilteredProducts([]);
                                            userSelected.current = true; // סימון שבחר משתמש
                                        }}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {product}
                                    </li>
                                ))}
                            </ul>
                        ) : (searchTerm && filteredProducts.length === 0 && mockProducts.length > 0 && !userSelected.current) ? (
                            <p className="no-results">מצטערים. לא נמצאו פריטים התואמים את החיפוש שלך</p>
                        ) : null}
                    </div>
                  </div>
                )}
                <Link to="/shoppingBasket" style={{ position: "relative" }}>
                    <button className="navbar-cart">🛒</button>
                    {cartCount > 0 && (
                        <span className="cart-badge">{cartCount}</span>
                    )}
                </Link>
            </div>
        </nav>
    );
}
