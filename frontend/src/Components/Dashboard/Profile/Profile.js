import React from 'react';
import './Profile';
import { connect } from 'react-redux';

const Profile = (props) => {

    const changePassword = () => {

    }

    return(
        <div>
            <h2>Profile</h2>
            <p>Your name:</p>
            <p>Your email:</p>

            <form>
                <h3>Change your password</h3>
                <label>Current password</label>
                <input type="password" id="curr-pass"/>
                <label>New password</label>
                <input type="password" id="new-pass"/>
                <label>Repeat new password</label>
                <input type="password" id="rep-new-pass"/>
            </form>

            <form>
                <h3>Change your email</h3>
                <label>Current email</label>
                <input type="email" id="curr-email"/>
                <label>New email</label>
                <input type="email" id="new-email"/>
                <label>Repeat new email</label>
                <input type="email" id="rep-new-email"/>
            </form>

            <form>
                <h3>Change your profile pic</h3>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(Profile);