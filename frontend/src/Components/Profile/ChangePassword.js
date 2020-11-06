import React from 'react';
import redirectToProfile from './redirectToProfile';
import {Redirect} from 'react-router-dom';

class ChangePassword extends React.Component {
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
                    <label className="form-label">Current password</label>
                    <input type="password" id="curr-pass" className="form-input"/>
                    <label className="form-label">New password</label>
                    <input type="password" id="new-pass" className="form-input"/>
                    <label className="form-label">Repeat new password</label>
                    <input type="password" id="rep-new-pass" className="form-input"/>
                    <button type="submit" className="profile__form-button" onClick={this.redirectToProfile}>Save {/*<img className="btn-arrow-icon" src="/icons/arrow.svg"/>*/}</button>
                </span>
            </form>
        )
    }
}

export default ChangePassword;