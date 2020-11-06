import React from 'react';
import './Dropdown.css';

const Dropdown = (props) => {
        return(
            <div className={`${props.clss} dropdown`}>
                        <span className="dropdown__header-title-text dropdown__header-title-text--single">
                            {props.status}
                        </span>
            </div>
        )
}
export default Dropdown;