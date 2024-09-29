// NavBar.jsx
import React from 'react';
import './Navbar.css'; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/home">CleverCloset </a>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="/home"></a>
                </li>
                <li>
                    <a href="https://karthikey1.github.io/clevercloset/wardrobe.html">Upload</a>
                </li>
                <li>
                    <a href="/check">Check</a>
                </li>
                <li>
                    <a href="/sell">Sell</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;