import React from 'react';
import redirectToProfile from './redirectToProfile';
import {Redirect} from 'react-router-dom';

class ChangeName extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
        this.redirectToProfile = redirectToProfile.bind(this);
    }
    render(){
        return(
            this.state.redirect ? (<Redirect to={"/app"} />) :
            <form className="profile profile__form">
                <span className="form-section">
                    <label className="form-label">New Name</label>
                    <input type="text" id="new-name" className="form-input"/>
                </span>
        <button type="submit" className="profile__form-button" onClick={this.redirectToProfile}>Save {/*<img className="btn-arrow-icon" src="/icons/arrow.svg"/>*/}</button>
            </form>
        )
    }

}

export default ChangeName;