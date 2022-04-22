import React from 'react';
import './Father.css'
import Brother from '../Brother/Brother';
import Mother from '../Mother/Mother';
import Sister from '../Sister/Sister';
import Auwal from '../Auwal/Auwal';

const Father = ({house}) => {
    return (
        <div>
            <h3>Father</h3>
            <h4><small>House: {house}</small></h4>
            <div className='father-container'>
                <Auwal></Auwal>
                <Mother></Mother>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;