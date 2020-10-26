import React from 'react';
import redirectToProfile from './redirectToProfile';
import {Redirect} from 'react-router-dom';

class ChangeMail extends React.Component {
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
                    <label className="form-label">Current email</label>
                    <input type="email" id="curr-email" className="form-input"/>
                    <label className="form-label">New email</label>
                    <input type="email" id="new-email" className="form-input"/>
                    <label className="form-label">Repeat new email</label>
                    <input type="email" id="rep-new-email" className="form-input"/>
                    <button type="submit" className="profile__form-button" onClick={this.redirectToProfile}>Save &gt;</button>
                </span>
            </form>
        )
    }
}

export default ChangeMail;