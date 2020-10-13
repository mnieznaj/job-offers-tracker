import React from 'react';
import './Done.css';
import doneIcon from './done-icon.svg';

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
                <img className={"done-icon"} src={doneIcon} alt="done" />
                {/* <span className="done-text">Done</span> */}
            </span>
        </div>
    )
}

export default Done;