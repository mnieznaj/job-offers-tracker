import React from 'react';

const ChangeMail = () => {

    return(
        <form className="profile profile__form">
            {/* <h3 className="form-title">Change your email</h3> */}
            <span class="form-section">
                <label className="form-label">Current email</label>
                <input type="email" id="curr-email" className="form-input"/>
                <label className="form-label">New email</label>
                <input type="email" id="new-email" className="form-input"/>
                <label className="form-label">Repeat new email</label>
                <input type="email" id="rep-new-email" className="form-input"/>
                <button type="submit" className="profile__form-button">Save &gt;</button>
            </span>
        </form>
    )
}

export default ChangeMail;