import React, { useContext } from 'react';
import { RingContex } from '../Grandpa/Grandpa';

const Special = () => {
    const ring =useContext(RingContex);
    return (
        <div>
            <h3>Special</h3>
            <h4><small>Gift: {ring}</small></h4>
        </div>
    );
};

export default Special;