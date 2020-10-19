import React from 'react';
import './Done.css';
import doneAnimation from './done-animation.gif';

const Done = () => {
    return(
        <div id="done" className="done done--hide">
            <span className="done-content">
                <img className={"done-animation done-animation--visible"} src={doneAnimation} alt="done" loading="lazy"/>
            </span>
        </div>
    )
}

export default Done;