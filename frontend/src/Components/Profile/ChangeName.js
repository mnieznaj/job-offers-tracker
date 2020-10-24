import React from 'react';
import { requestSucceded } from '../../utils/requestSucceded';

const ChangeName = () => {

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
                <label className="form-label">New Name</label>
                <input type="text" id="new-name" className="form-input"/>
            </span>
            <button type="submit" className="profile__form-button" onClick={passToProfile}>Save &gt;</button>
        </form>
    )
}

export default ChangeName;