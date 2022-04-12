import React from 'react';
import './TShirt.css'

const TShirt = ({handleAddtoCart, tShirt}) => {
    const {name, picture, price} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="images" />
            <h3>{name}</h3>
            <h4>Price: $ {price}</h4>
            <button onClick={() => handleAddtoCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;