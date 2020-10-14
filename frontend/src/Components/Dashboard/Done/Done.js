import React from 'react';
import './Done.css';
import doneAnimation from './done-animation.gif';

// class Done extends React.Component {
    // constructor(props){
    //     super(props),
    //     this.state = {
    //         loading: this.props.loading,
    //         completed: this.props.completed
    //     }
    // }
const Done = () => {
    return(
        <div id="done" className="done done--hide">
            <span className="done-content">
                <img className={"done-animation"} src={doneAnimation} alt="done" loading="lazy"/>
                {/* <span className="done-text">Done</span> */}
            </span>
        </div>
    )
}

export default Done;