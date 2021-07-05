import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...restprops}) => (
    <div className='group'>
    <input className='form-input' onChange={handleChange} {...restprops} />
    {label ?(
        <label
            className={`${
                restprops.value.length ? 'shrink' : ''
            } form-input-label`}
        >
       {label}
       </label> 
    ):null}
    
    </div>
);

export default FormInput;