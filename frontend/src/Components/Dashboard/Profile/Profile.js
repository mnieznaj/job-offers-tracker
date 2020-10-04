import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import DragAndDrop from './DragAndDrop';

const Profile = (props) => {

    const changePassword = () => {

    }
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("dbId");
        window.location.reload();
    }

    return(
        <div className="profile">
            <h2 className="profile-title">Profile</h2>
            <div className="profile__info">
                <p>Your name:</p>
                <p>x</p>
                <p>Your email:</p>
                <p>x</p>
            </div>

            <form className="profile__form">
                <h3>Change your password</h3>
                <label className="profile__form-label">Current password</label>
                <input type="password" id="curr-pass" className="profile__form-input"/>
                <label className="profile__form-label">New password</label>
                <input type="password" id="new-pass" className="profile__form-input"/>
                <label className="profile__form-label">Repeat new password</label>
                <input type="password" id="rep-new-pass" className="profile__form-input"/>
                <button type="submit" className="profile__form-button">Submit</button>
            </form>

            <form className="profile__form">
                <h3>Change your email</h3>
                <label className="profile__form-label">Current email</label>
                <input type="email" id="curr-email" className="profile__form-input"/>
                <label className="profile__form-label">New email</label>
                <input type="email" id="new-email" className="profile__form-input"/>
                <label className="profile__form-label">Repeat new email</label>
                <input type="email" id="rep-new-email" className="profile__form-input"/>
                <button type="submit" className="profile__form-button">Submit</button>
            </form>

            <DragAndDrop />

            <button onClick={logout} className="profile__form-button">Logout</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(Profile);