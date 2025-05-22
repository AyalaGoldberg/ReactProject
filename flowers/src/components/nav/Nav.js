


import { useState, useRef } from "react";
import logo from "../../images/logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCart } from "../shoppingCart/CartOntext";
import SearchBox from "./SearchBox";

export default function Nav({ searchTerm, setSearchTerm, showSearch, productsToSearch }) {
    const { productsForBuying } = useCart();
    const cartCount = productsForBuying.reduce((sum, item) => sum + (item.amount || 1), 0);
    const [shopDropdownOpen, setShopDropdownOpen] = useState(false);




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
                <li
                    onMouseEnter={() => setShopDropdownOpen(true)}
                    onMouseLeave={() => setShopDropdownOpen(false)}
                    style={{ position: "relative" }}
                >
                    <Link to="" onClick={e => e.preventDefault()}>חנות</Link>
                    {shopDropdownOpen && (
                        <ul className="dropdown-list">
                            <li><Link to="/shop/barDesigns">עיצובי בר</Link></li>
                            <li><Link to="/shop/calasChairs">כסאות כלה</Link></li>
                            <li><Link to="/shop/calasBouquets">זרים לכלה</Link></li>
                            <li><Link to="/shop/hupotDesigns">עיצובי חופות</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to="/contact">ליצירת קשר</Link></li>
            </ul>
            <div className="navbar-actions">
                {showSearch && (
                    <SearchBox
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        productsToSearch={productsToSearch}
                    />
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
