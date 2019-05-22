import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id="navContainer">
            <nav>
                <Link to="/">
                <img src="https://library.kissclipart.com/20181213/oge/kissclipart-bakery-shop-icon-png-clipart-bakery-computer-icons-8fa7abc002a9ae3c.png" alt="Shop Logo" id="logo" />
                </Link>
                <h1>Yums Bakery Shop</h1>
                <div className="navbar">
                    <div>
                        <Link to="/menu" id="link"> Menu </Link>
                        <Link to="/aboutus" id="link"> About Us </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar