import React from 'react';
import { requestSucceded } from '../../../utils/requestSucceded';

const ChangePassword = () => {

    const passToProfile = (e) => {
        e.preventDefault();
        requestSucceded(2900);
        setTimeout(() => {
            window.location.href = window.origin + "/app/profile";
        }, 2900)
    }
    return(
        <form className="profile profile__form">
            <span className="form-section">
                <label className="form-label">Current password</label>
                <input type="password" id="curr-pass" className="form-input"/>
                <label className="form-label">New password</label>
                <input type="password" id="new-pass" className="form-input"/>
                <label className="form-label">Repeat new password</label>
                <input type="password" id="rep-new-pass" className="form-input"/>
                <button type="submit" className="profile__form-button" onClick={passToProfile}>Save &gt;</button>
            </span>
        </form>
    )
}

export default ChangePassword;