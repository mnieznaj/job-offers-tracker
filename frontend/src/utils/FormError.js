import React from 'react';

const FormError = props => {
    return(
        <span className="form-error-msg">
            {props.children}
        </span>
    )
}

export default FormError;