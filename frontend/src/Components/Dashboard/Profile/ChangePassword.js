import React from 'react';

const ChangePassword = () => {

    return(
        <form className="profile profile__form">
            {/* <h3 className="form-title">Change your password</h3> */}
            <span class="form-section">
                <label className="form-label">Current password</label>
                <input type="password" id="curr-pass" className="form-input"/>
                <label className="form-label">New password</label>
                <input type="password" id="new-pass" className="form-input"/>
                <label className="form-label">Repeat new password</label>
                <input type="password" id="rep-new-pass" className="form-input"/>
                <button type="submit" className="profile__form-button">Save &gt;</button>
            </span>
        </form>
    )
}

export default ChangePassword;