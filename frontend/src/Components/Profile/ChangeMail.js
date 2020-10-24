import React from 'react';
import { requestSucceded } from '../../utils/requestSucceded';

const ChangeMail = () => {

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
                <label className="form-label">Current email</label>
                <input type="email" id="curr-email" className="form-input"/>
                <label className="form-label">New email</label>
                <input type="email" id="new-email" className="form-input"/>
                <label className="form-label">Repeat new email</label>
                <input type="email" id="rep-new-email" className="form-input"/>
                <button type="submit" className="profile__form-button" onClick={passToProfile}>Save &gt;</button>
            </span>
        </form>
    )
}

export default ChangeMail;