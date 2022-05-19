import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Poduct.css'
const Poduct = (props) => {
    
    const {name,price,ratings,img,seller} = props.poduct;
    return (
        <div className='poduct'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Seller : {seller}</p>
            <p>Rating: {ratings} stars</p>
            <button className="cart-btn" onClick={()=> props.clickHandler(props.poduct)}>Add to cart
            <FontAwesomeIcon className='btn-icon' icon={faCartPlus} /></button>
        </div>
    );
};

export default Poduct;