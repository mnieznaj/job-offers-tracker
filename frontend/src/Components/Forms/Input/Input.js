import React from 'react';

const Input = props => {
    const name = props.name.toLowerCase();
    return(
        <React.Fragment>
            <label htmlFor={name} className="form-label">{props.name}</label>
            <input type="text" name={name} className="form-input" placeholder={props.placeholder} onChange={props.update} value={props.value}/>
        </React.Fragment>
    )
}

export default Input;