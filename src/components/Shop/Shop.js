import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Poduct from '../Poduct/Poduct';
import './Shop.css'

const Shop = () => {
    const [poducts,setPoducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setPoducts(data))
    },[])
    const [countClick,setCountClick] = useState([]);
    useEffect(()=>{
        const savedCart = [];
        const storeCart = getStoreCart();
        for(const id in storeCart){
            const addedPoducts = poducts.find(poduct => poduct.id === id)
            if(addedPoducts){
                const quantity = storeCart[id];
                addedPoducts.quantity = quantity;
                savedCart.push(addedPoducts)
            }
            
        }
        setCountClick(savedCart)
    },[poducts])

    
    const addHandler = (selectedPoduct)=>{
        let newCart = [];
        const exists = countClick.find(poduct => poduct.id === selectedPoduct.id)
        console.log(exists)
        if(!exists){
            selectedPoduct.quantity = 1;
            newCart = [...countClick,selectedPoduct]

        }else{
            const rest = countClick.filter(poduct => poduct.id !== selectedPoduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists];
        }
        setCountClick(newCart)
        addToDb(selectedPoduct.id)
    }

    // console.log(countClick)
    return (
        <div className='shop'>
            <div className="poducts-container">
                {
                    poducts.map(poduct => <Poduct poduct={poduct} clickHandler={addHandler} key={poduct.id}></Poduct>)
                }
            </div>
            <div className="cart-container">
                <Cart cartCount = {countClick}></Cart>
            </div>
        </div>
    );
};

export default Shop;