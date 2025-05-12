import React from "react";
import logo from "../../images/logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";


export default function Nav() {
    console.log("Navbar is rendering");
    return (

        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
                <h1>Cherry Blossom</h1>
            </div>
            {/* <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul> */}
            <div className="navbar-actions">
                <input type="text" placeholder="Search..." className="navbar-search" />
                <Link to="/shoppingBasket">
                <button className="navbar-cart">🛒</button>
                </Link>
            </div>
        </nav>
    );
}