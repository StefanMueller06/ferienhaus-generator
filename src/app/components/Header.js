import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <div className="header-buttons">
                <button>+</button>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <h1>Ferienhaus-Generator</h1>
        </header>
    );
};

export default Header;
