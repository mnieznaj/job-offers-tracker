import React from 'react';

const ChangeName = () => {

    return(
        <form className="profile profile__form">
            {/* <h3 className="form-title">Change your name</h3> */}
            <span class="form-section">
                <label className="form-label">New Name</label>
                <input type="text" id="new-name" className="form-input"/>
            </span>
            <button type="submit" className="profile__form-button">Save &gt;</button>
        </form>
    )
}

export default ChangeName;