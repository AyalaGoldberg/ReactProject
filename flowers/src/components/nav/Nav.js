import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

// רשימת מוצרים לדוגמה
const mockProducts = [
    "Cherry Blossom Soap",
    "Cherry Blossom Lotion",
    "Cherry Blossom Candle",
    "Rose Perfume",
    "Lavender Oil",
    "Vanilla Body Cream"
];

export default function Nav() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value) {
            const results = mockProducts.filter(product =>
                product.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-actions">
                <div className="search-area">
                    <input
                        type="text"
                        placeholder="Search Products..."
                        className="navbar-search"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <div className="search-results-container">
                        {filteredProducts.length > 0 ? (
                            <ul className="search-results">
                                {filteredProducts.map((product, index) => (
                                    <li key={index}>{product}</li>
                                ))}
                            </ul>
                        ) : searchTerm ? (
                            <p className="no-results">מצטערים. לא נמצאו פריטים התואמים את החיפוש שלך</p>
                        ) : null}
                    </div>
                </div>
                <Link to="/shoppingBasket">
                    <button className="navbar-cart">🛒</button>
                </Link>
            </div>
        </nav>
    );
}