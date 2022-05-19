import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-bar'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/Order-inventory">Order Inventory</a>
                <a href="/order-review">Order Review</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;