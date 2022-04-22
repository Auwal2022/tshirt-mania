import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleAddtoCart = (selectedItem) => {
        const exist = cart.find(tShirt => tShirt._id === selectedItem._id);
        if(!exist){
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else{
            alert('item already selected');
        }
    }

    const handleRemoveItems = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddtoCart={handleAddtoCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                handleRemoveItems={handleRemoveItems}
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;