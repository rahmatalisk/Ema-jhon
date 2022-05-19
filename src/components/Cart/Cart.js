import React from 'react';
import './Cart.css'
const Cart = (props) => {
    let price = 0;
    let shipping = 0;
    let quantity = 0; 
    for(const poduct of props.cartCount){
        price = price + (poduct.price * poduct.quantity);
        shipping = shipping + (poduct.shipping * poduct.quantity);
        quantity = quantity + poduct.quantity;
    }
    let tax = price * 0.1;
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Item: {quantity} </p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${(price + tax + shipping).toFixed(2)}</h4>
        </div>
    );
};

export default Cart;