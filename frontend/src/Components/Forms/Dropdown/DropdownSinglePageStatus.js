import React from 'react';
import './Dropdown.css';

const Dropdown = (props) => {
        return(
            <div className={`${props.clss} dropdown`}>
            {/* //     <div className="dropdown__header">
            //         <div className="dropdown__header-title" > */}
                        <span className="dropdown__header-title-text dropdown__header-title-text--single">
                            {props.status}
                        </span>
            {/* //         </div>
            //     </div> */}
            </div>
        )
}
export default Dropdown;