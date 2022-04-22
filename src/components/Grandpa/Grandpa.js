import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Auncle from '../Auncle/Auncle';
import Father from '../Father/Father';
export const RingContex = createContext();


const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring';

    const handleHouseNumbers = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }
    
    return (
        <RingContex.Provider value={ornament}>
            <div>
                <h3>GrandPa</h3>
                <h4><small>House: {house}</small></h4>
                <button onClick={() => {handleHouseNumbers()}}>BuyHouse</button>
                <div className='grandpa-container'>
                    <Father house={house}></Father>
                    <Auncle house={house}></Auncle>
                </div>
            </div>
        </RingContex.Provider>
        
    );
};

export default Grandpa;