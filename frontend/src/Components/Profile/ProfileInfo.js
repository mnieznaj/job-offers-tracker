import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUserToken } from '../../store/actions/dashboardActions'
import logoutIcon from './logout-icon.svg';

const ProfileInfo = (props) => {
    const logout = () => {
        // localStorage.removeItem("token");
        // localStorage.removeItem("userId");
        // localStorage.removeItem("dbId");
        props.deleteToken();
        window.location.reload();
    }
    let { url } = useRouteMatch();
    return(
        <div className="profile">
            <div className="profile__info">
                <section className="profile__section">
                    <p className="form-label">Name</p>
                    <p className="profile__info-text">lorem ipsum</p>
                    <Link className="profile__edit-btn-link" to={`${url}/changeName`}><button className="profile__edit-btn">Edit</button></Link>
                </section>
                <section className="profile__section">
                    <p className="form-label">E-mail</p>
                    <p className="profile__info-text">my_mail@mail.com</p>
                    <Link className="profile__edit-btn-link" to={`${url}/changeMail`}><button className="profile__edit-btn">Edit</button></Link>
                </section>
                <section className="profile__section">
                    <p className="form-label">Password</p>
                    <Link className="profile__edit-btn-link" to={`${url}/changePassword`}><button className="profile__edit-btn">Edit</button></Link>
                </section>
                <section className="profile__section">
                    <p className="form-label profile-logout"><img className="profile-logout-icon" src={logoutIcon} alt="logout icon" /> Logout</p>
                    <button onClick={logout} className="profile__edit-btn">Logout</button>
                </section>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteToken: () => dispatch(deleteUserToken())
    }
}

export default connect(null, mapDispatchToProps)(ProfileInfo);