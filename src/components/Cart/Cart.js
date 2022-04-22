import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItems}) => {
    let command;
    if(cart.length === 0){
        command = <p>Please add atleast one item!!</p>
    }

    else if(cart.length === 1){
        command = <p>Please add more items to get discount!!</p>
    }

    else{
        command = <p>Now you are eligable to get Discount</p>
    }


    return (
        <div className='cart-panel'>
            <h3>Items Selected: {cart.length}</h3>
            {command}
            {
                cart.map(tShirt => <p className='selected-items-details'>
                    <img src={tShirt.picture} alt="" />
                    {tShirt.name}
                    <button onClick={() => handleRemoveItems(tShirt)}>X</button>
                    </p>)
            }
            {cart.length < 4 ? <p>Please keep adding!</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;