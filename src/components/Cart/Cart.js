import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Selected Items: {cart.length}</h3>
            {
                cart.map(tShirt => <p>{tShirt.name}
                     <button> X </button>
                </p>)
            }
        </div>
    );
};

export default Cart;